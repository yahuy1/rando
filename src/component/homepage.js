import React from 'react';
import {Link} from 'react-router-dom'
function Title() {
    return (
        <div className = 'homePage'>
            <h1 id = 'title'>Rando</h1>
            <Link to='/play'>
                <button id = "button1">Play</button><br/>
            </Link>
            <button id = "button2">How to play</button>
        </div>
    )
}
export default Title;