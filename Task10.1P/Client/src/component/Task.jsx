import React from 'react';
import '../css/Task.css'

const Task = () =>{

    return(
    <div>
    <nav className = 'Navbar'>
            <ul>
                <li><a id ='NewRequesterTask' href='#NewRequesterTask'>New Requester Task</a></li>
                <li><a id ='WokerTask' href='#WokerTask'>Woker Task</a></li>
            </ul>
    </nav>
    <div className='title'>
        <h3>Select Task Type</h3>
    </div>
    </div>
    )
}

export default Task