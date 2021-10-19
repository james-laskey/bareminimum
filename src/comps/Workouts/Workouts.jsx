import React, {useState,useEffect} from "react";
import ReactDOM from "react-dom";

export default function Workouts(props){
    const user = props.user
    useEffect(()=>{

    })
    useEffect(()=>{

    })

    return(
    <main>

    </main>
    )
}
/*
<section>
                        <select onInput={e=>{setStartHour(e.target.value)}}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                        </select>
                        <select onInput={e=>{setStartMinutes(e.target.value)}}>
                            <option value={0}>00</option>
                            <option value={30}>30</option>
                        </select>
                        <section>
                            <div>
                                <label for='start-am'>AM</label>
                                <input type='radio' name='start-ampm' id='start-am' onInput={e=>{setStartAmPm('AM')}}/>
                            </div>
                            <div>
                                <label for='start-pm'>PM</label>
                                <input type='radio' name='start-ampm' id='start-pm' onInput={e=>{setStartAmPm('PM')}}/>
                            </div>
                        </section>
                        <select onInput={e=>{setEndtHour(e.target.value)}}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                        </select>
                        <select onInput={e=>{setEndMinutes(e.target.value)}}>
                            <option value={0}>00</option>
                            <option value={30}>30</option>
                        </select>
                        <section>
                            <div>
                                <label for='end-am'>AM</label>
                                <input type='radio' name='end-ampm' id='end-am' onInput={e=>{setEndAmPm('AM')}}/>
                            </div>
                            <div>
                                <label for='end-pm'>PM</label>

                                <input type='radio' name='end-ampm' id='end-pm' onInput={e=>{setEndAmPm('PM')}}/>
                            </div>
                        </section>
                    </section>

*/