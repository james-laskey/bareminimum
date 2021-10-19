import React, {useState,useEffect} from "react";
import ReactDOM from "react-dom";
import SignUp from './SignUp.jsx'
import Home from './Home/Home.jsx'
import AdminHome from './Home/AdminHome.jsx'

export default function Layout(props){
    let [user, setUser] = useState(null)
    let [isLoggedIn, setLogin] = useState(false)

    useEffect(()=>{

    })
    useEffect(()=>{

    })
    function handleLogin(userInfo){
    //put credential into cookies
        setUser(userInfo)
        setLogin(true)
    }
    if(isLoggedIn){
        if(user.profile=='admin'){
            return(
                <AdminHome user={user}/>
            )
        } else {
            return(
                <Home user={user}/>
            )
        }

    } else {
        return(
                <SignUp login={handleLogin}/>
            )
    }

}