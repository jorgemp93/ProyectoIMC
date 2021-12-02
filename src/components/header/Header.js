import React from 'react';
import './Header.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';

function Header({ collapsed }) {
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
                        <h3>Jorge Moscoso</h3>
                        <AccountCircleIcon className="avatar"/>
                        <KeyboardArrowDownIcon className="arrow"/>
                    </div>
                </div>
                <div className="bottom3">
                    <button className="add-btn3">Fecha</button>
                    <div className="bottom4">
                    <button className="add-btn4">Empleado</button>
                <div className="bottom">
                    <button className="add-btn">Nota</button>
                <div className="bottom2">
                    <button className="add-btn2">Compartir</button>
                    <div className="searchbar">
                        <SearchIcon className="search-icon"/>
                        <input type="text" placeholder="Buscar"/>
                    </div>
                </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Header