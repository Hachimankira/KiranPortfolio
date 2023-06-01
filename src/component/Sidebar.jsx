import React from 'react'
import '../App.css';

import { SidebarData } from './SidebarData';



const Sidebar = () => {
    return (
        <ul className='SidebarList'> 
        <li className='title'>Kiran Shrestha</li>
            <div className='sidebar'>
                {SidebarData.map((val, key) => {
                    return (
                        
                        <li 
                        id={window.location.pathname === val.link ? "active" : ""}
                        className='SidebarRow' 
                        key={key} 
                        onClick={() => {window.location.pathname = val.link}}>
                            <div id='icon'>{val.icon}</div>
                            <div id='title'>{val.title}</div>
                        </li>
                    )
                })}
            </div>
        </ul>
    )
}

export default Sidebar