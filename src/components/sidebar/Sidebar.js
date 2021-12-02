import React, { useState } from 'react';
import './Sidebar.css';
import logo from '../../assets/logo.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PollIcon from '@mui/icons-material/Poll';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import CommentIcon from '@mui/icons-material/Comment';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


function Sidebar({ collapsed, setCollapsed }) {

    const handleMenu = () => setCollapsed(!collapsed);
    
    return (
        <div className={"side-menu " + (collapsed && "collapsed")}>
            <div className="top-section">
                <div className="logo">
                    <img src={logo} alt="thesocialcomment" />
                </div>
                <div className={"toggle-menu-btn " + (collapsed && "collapsed")}>
                    <ArrowBackIcon className="arrow" onClick={handleMenu}/>
                </div>
            </div>

            <div className={"main-menu " + (collapsed && "collapsed")}>
                <ul>
                    <li>
                        <a href="/home" className="menu-item">
                            <HomeIcon className="icon"/>
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="/dashboard" className="menu-item">
                            <DashboardIcon className="icon"/>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="/reports" className="menu-item">
                            <PollIcon className="icon"/>
                            <span>Reports</span>
                        </a>
                    </li>
                    <li>
                        <a href="#home" className="menu-item">
                            <ArticleIcon className="icon"/>
                            <span>Projects</span>
                        </a>
                    </li>
                    <li>
                        <a href="#home" className="menu-item">
                            <GroupIcon className="icon"/>
                            <span>Team</span>
                        </a>
                    </li>
                    <li>
                        <a href="#home" className="menu-item">
                            <CommentIcon className="icon"/>
                            <span>Contact</span>
                        </a>
                    </li>
                    <li>
                        <a href="#home" className="menu-item">
                            <LogoutIcon className="icon"/>
                            <span>Logout</span>
                        </a>
                    </li>
                    <li>
                        
                    </li>
                </ul>
                <div className="settings">
                    <a href="#home" className="menu-item">
                        <SettingsOutlinedIcon className="icon"/>
                        <span>Settings</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
