import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Avatar } from '@mui/material'
import Toggle from './Toggle';
import './Card.css'
import { useState } from 'react';
import data from './data';

function Card(props) {
    return <div>
        <div>
            <video poster={props.pos} className='video' width="50%" height="25%" onClick={function () {
                const video = document.getElementsByClassName('video')[props.num]
                video.setAttribute("controls", "true")
                const img = document.getElementsByClassName('play')[props.num]
                img.setAttribute('style', 'display:none')
            }}>
                <source src={props.vdo} />
            </video>
            <img className='play' src='https://img.icons8.com/plasticine/256/circled-play.png' onClick={function () {
                const video = document.getElementsByClassName('video')[props.num]
                video.setAttribute("controls", "true")
                const img = document.getElementsByClassName('play')[props.num]
                img.setAttribute('style', 'display:none')
                video.requestFullscreen();
                video.play();
            }} />
        </div>
        <div className='ava_pad'>
            <Avatar className='avatar' src={props.ava} />
        </div>
        <h4 className='videotext'>{props.title}</h4>
        <h5 className='videotext2'>{props.chan}</h5>
        <h5 className='videotext3'>{props.tex}</h5>
        <Toggle />
    </div>
}
export default Card