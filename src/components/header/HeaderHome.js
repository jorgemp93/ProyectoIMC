import React from 'react';
import './Header.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';

function HeaderHome({ collapsed }) {
    var showDate = new Date();
    // var displayDate = showDate.getDay+', '+showDate.getDate()+' '+showDate.getMonth()+' '+showDate.getFullYear();
    var displayDate = showDate.toDateString();

    return (
        <div className={"header " + (!collapsed && "blur")}>
            <div className="left">
                <h1>Imascono/Database</h1>
                <h3>{displayDate}</h3>
            </div>
            <div className="right">
                <div className="top">
                    <NotificationsIcon className="notifications"/>
                    <div className="user">
                        <h3></h3>
                        <AccountCircleIcon className="avatar"/>
                        <KeyboardArrowDownIcon className="arrow"/>
                    </div>
                </div>
                </div>
                </div>
    )
}

export default HeaderHome