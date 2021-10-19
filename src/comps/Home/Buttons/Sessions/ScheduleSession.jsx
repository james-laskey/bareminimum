import React, {useState,useEffect} from "react";
import ReactDOM from "react-dom";
import CurrentSessions from './CurrentSessions.jsx'
import '../css/schedule.css'
//key = date value = time[]
let timeofday = {
    0: 'AM',
    1: 'PM'
}
var date = new Date()
let today = date.toLocaleDateString('fr-CA')
let limit = new Date( date.getTime()+1209600000).toLocaleDateString('fr-CA')
let  businessHours = [8,10]
let trainerBusy = {
    limit: [today, limit],
   '2021-10-19': [['6:00','7:00','AM']['4:00','5:00','PM']],
   '2021-10-20': [['6:00','7:00','AM']['3:00','4:00','PM']],
   '2021-10-21': [['12:00','1:00','PM']['7:00','8:00','PM']],
   '2021-10-22': [['2:00','3:00','PM']['8:00','9:00','PM']]
}
let mock  =  {
    'sessionsLeft': 5
}
export default function ScheduleSession(props){
    const user = props.user
    let [currentSessions, setCurrentSessions] = useState(false)
    let [scheduleNewSession, setScheduleNewSession] = useState(false)
    let [userSessions ,setUserSessions] = useState(mock)
    let [date, setDate]  = useState(today)
    useEffect(()=>{

    },[scheduleNewSession])
    useEffect(()=>{
        function leadingZero(number){
            if(number==12 || number==10 || number==11){
                //need leading zero
                return '0'+number.toString()
            } else {
                return number.toString()
            }
        }
        //create a function the creates clickable sessions
        let hour = businessHours[0]
        let parsedDate = new Date(date).toLocaleDateString('fr-CA')
        console.log(parsedDate)
        let tod  =  0
        let availableTimes = []
        let time;
        for (let i = hour; i<=12;i++){
            if(i!=12){
                let nextHour = i+1
                time = [i.toString()+':00',nextHour.toString()+":00", 'AM']
            } else {
                let nextHour = 1
                time = [i.toString()+':00',nextHour.toString()+":00", 'PM']
            }
            if(!trainerBusy[parsedDate].contains(time)){
                availableTimes.push(time)
            }

        }
        for(let j = 1; j<businessHours[1]; j++){
                let nextHour = j+1
                time = [j.toString()+':00',nextHour.toString()+":00", 'PM']
                if(!trainerBusy[parsedDate].contains(time)){
                    availableTimes.push(time)
                }
        }
        console.log(availableTimes)
    },  [date])
    if(currentSessions) {
        return(
            <CurrentSessions user={user}/>
        )
    }
    if(scheduleNewSession){
        return(
            <main class='new-sessions'>
                <header>
                    <div>
                        <h1>Sessions Left: <span id='sessions-left'>{userSessions['sessionsLeft']}</span></h1>
                    </div>
                    <div id='new-sessions'>
                    </div>
                </header>
                <section>
                    <input type='date' min={trainerBusy.limit[0]} max={trainerBusy.limit[1]} onInput={e=>{setDate(e.target.value)}}/>
                    <section id='available-times'>

                    </section>
                    <textarea placeholder='Enter details for session...' onInput={e=>{setDescription(e.target.value)}}></textarea>
                </section>
                <section id='complete'>
                    <button onClick={e=>{addSession()}}>Add</button>
                    <button onClick={e=>{schedule()}}>Schedule Sessions</button>
                </section>
            </main>
        )
    }
    else {
        return(
            <main class='schedule-menu'>
                <button onClick={e=>{setCurrentSessions(true)}}>Scheduled Sessions</button>
                <button onClick={e=>{setScheduleNewSession(true)}}>Schedule New Session</button>
            </main>
        )
    }

}

