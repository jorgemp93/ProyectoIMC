import React from 'react';
import './CardReports.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ProgressBarReports from '../progressbar/ProgressBarReports';

function CardReports({ title, count, growth, data, blue }) {

    return (
        <div className={"card2 " + (blue && "blue")}>
            <div className="left">
                <h3>{title}</h3>
                <h1>{count}</h1>
                <div className="stat">
                    <ArrowRightAltIcon className={"arrow" + (growth<0 ? " red" : "")} />
                    {growth>=0 ? (<h4>+{growth}%</h4>) : (<h4 className="red">{growth}%</h4>)}
                </div>
            </div>
            <div className="right">
                <ProgressBarReports data={data} blue={blue}/>
            </div>

        </div>
    )
}

export default CardReports
