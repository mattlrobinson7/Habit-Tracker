import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom';

export default function ProgressBar(props) {

    return (
        <>
            <div className="box">
                <div className="percent">
                    <svg>
                        <circle cx="70" cy="70" r="50"></circle>
                        <circle cx="70" cy="70" r="50" style={{ strokeDashoffset: 440 - (440 * props.percent) / 100 }}></circle>
                    </svg>
                    <div className="num">
                        <h2>{props.complete}/{props.goal}</h2>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .box {
                    float: left;
                }

                .percent {
                    height: 150px;
                    padding-left: 25px;
                }

                svg {
                    width: 150px;
                }
            
                .box .percent svg circle
                {
                  width:150px;
                  height:150px;
                  fill:none;
                  stroke-width:10;
                  stroke:#000;
                  stroke-dasharray:440;
                  stroke-dashoffset:440;
                  stroke-linecap:round;
                }
                .box .percent svg circle:nth-child(1)
                {
                  stroke-dashoffset:0;
                  stroke:#f3f3f3;
                  transform: translate(5px, 5px);
                }
                .box .percent svg circle:nth-child(2)
                {
                  stroke:#00ff43;
                  transform: rotate(-180deg) translate(-145px, -145px);
                }
                .box .percent .num
                {
                  position: relative;
                  top: -105px;
                  display:flex;
                  justify-content:center;
                  align-items:center;
                  border-radius:50%;
                }
                .box .percent .num h2
                {
                  font-size:20px;
                  color:#999;
                  font-weight:700;
                  letter-spacing:0px;
                }

                @media only screen and (max-width: 800px) {

                    .box {
                        margin-left: -7%;
                    }
                }
                
            `}</style>
        </>
    )
}