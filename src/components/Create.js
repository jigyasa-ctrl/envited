

import { React, useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import Events from './Events';

function Create(prop) {
    const [name, setName] = useState("")
    const [host, setHost] = useState("")
    const [date, setDate] = useState("")
    const [eventDate, setEventDate] = useState("")
    const [photo, setPhoto] = useState("")
    function HandleName(e) {
        setName(e.target.value)
    }
    function HandleHost(e) {
        setHost(e.target.value)
    }
    function HandleDate(e) {
        setDate(e.target.value)
    }
    function HandleEventDate(e) {
        setEventDate(e.target.value)
    }
    function HandlePhoto(e) {
        setPhoto(e.target.value)
    }
    console.log(name, host)
    return (

        <div class="Hello">

            <form className="form">
                <h2>Create an event</h2>
                <label for="eventname">Event Name</label>
                <input type="text" id="fname" name="fname" value={name} onChange={HandleName} />
                <label for="HostName">Host Name</label>
                <input type="text" id="lname" name="lname" value={host} onChange={HandleHost} />
                <label for="SyartendTime">Start and End Time</label>
                <input type="time" id="lname" name="lname" value={date} onChange={HandleDate} />
                <label for="Event">Event Date</label>
                <input type="date" id="lname" name="lname" value={eventDate} onChange={HandleEventDate} />
                <label for="EventPhoto">Event Photo</label>
                <input type="file" id="lname" name="lname" value={photo} onChange={HandlePhoto} />

                <Link to="/event">
                    <button id="next" type="Submit">Next</button>
                </Link>


            </form>
        </div >

    );
}

export default Create;
