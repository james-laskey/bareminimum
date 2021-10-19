import React, {useState,useEffect} from "react";
import ReactDOM from "react-dom";
import ScheduleSession from './Buttons/Sessions/ScheduleSession.jsx'
import UpdateBio from './Buttons/Trainee/UpdateBio.jsx'
import Inbox from './Buttons/Inbox.jsx'
import './Home.css'

export default function Home(props){
    const user = props.user
    let [toBeDisplayed, setToBeDisplayed] = useState(0)

    if(toBeDisplayed==1){
        return(
            <ScheduleSession back={setToBeDisplayed} user={user}/>
        )
    }
    if(toBeDisplayed==2){
        return(
            <UpdateBio back={setToBeDisplayed} user={user}/>
        )
    }
    if(toBeDisplayed==2){
        return(
            <Inbox back={setToBeDisplayed} user={user}/>
        )
    } else{
        return(
            <main class='home'>
                <header>
                    <section>
                        <img src='https://trashymedia.s3.us-east-2.amazonaws.com/assets/bmLogo.png'/>
                        <p>{user.name}</p>
                    </section>
                    <section>
                        <p>next session</p>
                        <section id='next-session'>
                        </section>
                    </section>
                </header>
                <section id='homeMenu'>
                    <section>
                        <button onClick={e=>{setToBeDisplayed(1)}}>Schedule</button>
                        <button onClick={e=>{setToBeDisplayed(2)}}>Bio</button>
                        <button onClick={e=>{setToBeDisplayed(3)}}>Inbox</button>
                        <button onClick={e=>{setToBeDisplayed(4)}}>Blog</button>
                        <button onClick={e=>{setToBeDisplayed(5)}}>Store</button>
                        <button onClick={e=>{setToBeDisplayed(6)}}>Settings</button>
                        <button onClick={e=>{setToBeDisplayed(7)}}>Logout</button>
                    </section>
                </section>
            </main>
            )
    }

}

