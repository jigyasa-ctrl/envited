

import { React, useEffect, useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import yes from '../assets/Going.png'
import maybe from '../assets/Maybe.png'
import no from '../assets/Not.png'

function Events(props) {


    return (

        <div id="event">
            <div class="eventimage"></div>
            <div className="eventBody">
                <h2>Aric's Birthday Party</h2>
                <p>Hosted by Anika</p>
                <div className="yesnobutton">
                    <img src={yes}></img>
                    <img src={maybe}></img>
                    <img src={no}></img>

                </div>
                <button>Invite a Friend</button>
                <div class="info">

                    <h3>to Sat 16 October 2022 2:30pm</h3>
                    <h3>to Sat 16 October 2022 9:30pm</h3>
                    <p>Add to calender</p>
                    <h3>18 Davy Street</h3>
                    <p>Open in Maps</p>
                </div>
                <div class="buttons">
                    <button id="details">Details</button>
                    <button id="posts">Posts</button>
                </div>
                <p id="message">Just a lowkey dinner to celebrate my 22nd. Would love to see you</p>

            </div>


        </div >

    );
}

export default Events;
