import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom';

export default function SingleHabit(props) {
    const data = props.data;
    const index = props.index;

    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);

    var progressWidth = (parseInt(data[1]) * 100) / parseInt(data[0]);

    var completedColors = ["#5a8737", "#277da1", "#f8961e", "#f94144", "#06d6a0", "#f9844a", "#4d908e"];
    var nonCompletedColors = ["#c8e0b6", "#7fb3c9", "#edbd82", "#f09091", "#93c9bb", "#d99d80", "#95e6e3"];

    return (
        <>
            <div className="goal">
                <h2 className="goal-title">{data[2]}</h2>

                <div className='progress-container'>
                    
                <div className="goal-current">Complete: {data[1]}</div>
                    <div className="progress-bar">
                        <div className="progress-complete" style={{ width: progressWidth + "%" }}></div>
                    </div>
                    
                    <div className="goal-amount">Goal: {data[0]}</div>
                </div>


                <div className="chart">
                    {data.map((col, i) => {
                        if (i > day + 2 && col === '') {
                            return (<span className="day not-reached-day" key={i} />);
                        }
                        if (i > 2) {
                            if (col === '.') {
                                return (<span className="day" style={{ backgroundColor: completedColors[index - 2] }} key={i} />);
                            } else if (col === '') {
                                return (<span className="day" style={{ backgroundColor: nonCompletedColors[index - 2] }} key={i} />);
                            }
                        }
                    })}
                </div>
            </div>
            <style jsx>{`
                .chart {
                    clear: both;
                }

                .goal-current {
                    float: left;
                    width: 10%;
                }

                .progress-bar {
                    width: 80%;
                    background-color: grey;
                    margin-bottom: 10px;
                    float: left;
                }

                .goal-amount {
                    float: left;
                    width: 10%;
                }

                  
                .progress-complete {
                    height: 20px;
                    background-color: green;
                }

                .goal {
                    clear: both;
                    width: 1200px;
                    background-color: #edf8f5;
                    border-radius: 5px;
                    padding: 10px;
                    margin: 10px;
                    font-size: 16px;
                    height: 300px;
                    text-align: center;
                }

                .day {
                    height: 20px;
                    width: 20px;
                    float: left;
                    margin-right: 2px;
                    margin-bottom: 2px;
                }

                .not-reached-day {
                    background-color: #edede9;
                }
            `}</style>
        </>
    );

}