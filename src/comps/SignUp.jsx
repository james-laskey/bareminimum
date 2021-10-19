import React, {useState,useEffect} from "react";
import ReactDOM from "react-dom";
import './landing-styles.css'
import logo from './bmLogoAlt.svg'
export default function SignUp(props){
    let login = props.login
    let [createAccount, setCreateAccount] = useState(false)
    let [secret, setSecret] = useState(false)
    let [userSecret, setUserSecret] = useState(null)
    let [verified, setVerify] = useState(false)
    let [confirmation, sendConfirmation] = useState(false)
    let [user,setUser] = useState(null)
    let [name, setName] = useState(null)
    let [nickname, setNickname] = useState(null)
    let [cell, setCell] = useState(null)
    let [email, setEmail] = useState(null)
    function handleErrorReportExitClick(){
        let modal = document.getElementById('error-reporting')
        modal.classList.remove('show')
        modal.classList.add('hide')
    }
    function ErrorReportingModal(props){
        return(
            <section>
                <button id='exit' onClick={handleErrorReportExitClick()}>X</button>>
                <h3>there seems to be an issue...</h3>
                <div>
                    <p>{props.error}</p>
                </div>
            </section>
        )
    }
    function handleLoginClick(){
    //send credentials to BE and generate code to send back and send to DB
    //I confirm the code with the error reporting message!
        const credentials = {
            name: name,
            email: email,
            profile: 'user'
        }
        login(credentials)
//         fetch('/generateConfirmationCode',{
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json, text/plain',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(credentials)
//         })
//         .then(response=>{return response.json()})
//         .then(json=>{
//             if(json.secret !==null){
//                 setUser(json.user)
//                 setSecret(true)
//             }
//         })
    }
    function handleUserSecretClick(){
        let credentials = {
            copy: userSecret
        }
        fetch('/verifyConfirmationCode',{
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials)
        })
        .then(response=>{return response.json()})
        .then(json=>{
            if(json.verified){
                //ask for cookies to stay logged in but for now just login
                login(user)
            } else {
                //Error Reporting
                 ReactDOM.render(<ErrorReportingModal error={json.error}/>,document.getElementById('error-reporting'))
            }
        })
    }
    function handleCreateAccountClick(){
        const user = {
            name: name,
            alias: nickname,
            cell: cell
        }
        fetch('/verifyCredentials',{
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(response=>{return json.response()})
        .then(json=>{
            if(json.verified){
                //use twilio api to send text confirmation set User and set trigger twilio event
                setUser(json.user)
                sendConfirmation(true)
            }
        })
    }
    useEffect(()=>{
        if(user && confirmation){
            //trigger  twilio event
            login(user)
        }
    }, [user, confirmation])
    useEffect(()=>{
        if(user && secret==true){
            //trigger  error messasge to display confirmation
            function ConfirmationModal(props){
                return(
                    <section>
                        <button id='exit' onClick={handleErrorReportExitClick()}>X</button>
                        <p>Enter the confirmation code sent to your phone</p>
                        <input type='text' onInput={e=>{setUserSecret(e.target.value)}}/>
                        <button onClick={handleUserSecretClick()}>Confirm</button>
                    </section>
                )
            }
            let modal = document.getElementById('error-reporting')
            modal.classList.add('show')
            ReactDOM.render(<ConfirmationModal/>,modal)
        }

    }, [user, secret])
    if(createAccount){
        return(
            <main class='create-account'>
                <details id='error-reporting'></details>
                <section>
                    <h2>do less to do more.</h2>
                    <section>
                        <label for='name'>Name</label><br/>
                        <input type='text' name='name' id='name' onInput={e=>{setName(e.target.value)}}/><br/>
                        <label for='nickname'>Nickname</label><br/>
                        <input type='text' name='nickname' id='nickname' onInput={e=>{setNickname(e.target.value)}}/><br/>
                        <label for='email'>Email</label><br/>
                        <input placeholder='bareminimum@site.com' type='email' name='email' id='email' onInput={e=>{setEmail(e.target.value)}}/><br/>
                        <label for='cell'>Phone Number</label><br/>
                        <input type='tel' name='cell' id='cell' onInput={e=>{setCell(e.target.value)}}/>
                        <button onClick={handleCreateAccountClick}>Create Account</button>
                    </section>
                </section>
            </main>
        )
    } else {
        return(
            <main class='login'>
                <details id='error-reporting'></details>
                <section>
                    <header><img src='https://trashymedia.s3.us-east-2.amazonaws.com/assets/bmAltLogo.png'/></header>
                    <section id='login'>
                        <input placeholder='Name/Alias' type='text' name='name' id='name' onInput={e=>{setName(e.target.value)}}/>
                        <input placeholder='bareminimum@site.com' type='email' name='email' id='email' onInput={e=>{setEmail(e.target.value)}}/>
                        <button onClick={handleLoginClick}>
                            <div id='button'>Login</div>
                        </button>
                        <p onClick={e=>{setCreateAccount(true)}}>create account ></p>
                    </section>
                </section>
            </main>
        )
    }
}
