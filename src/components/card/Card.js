import React from 'react';
import './Card.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ProgressBar from '../progressbar/ProgressBar';

function Card({ title, count, growth, data, blue }) {

    return (
        <div className={"card " + (blue && "blue")}>
            <div className="left">
                <h3>{title}</h3>
                <h1>{count}</h1>
                <div className="stat">
                    <ArrowRightAltIcon className={"arrow" + (growth<0 ? " red" : "")} />
                    {growth>=0 ? (<h4>+{growth}%</h4>) : (<h4 className="red">{growth}%</h4>)}
                </div>
            </div>
            <div className="right">
                <ProgressBar data={data} blue={blue}/>
            </div>

        </div>
    )
}

export default Card

