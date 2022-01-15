import React, { useEffect, useState } from 'react'
import ProgressBar from './ProgressBar';

export default function SingleHabit(props) {
    const data = props.data;
    const index = props.index;

    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);

    var progressWidth = Math.round((parseInt(data[1]) * 100) / parseInt(data[0]));

    var completedColors = ["#5a8737", "#277da1", "#f8961e", "#f94144", "#06d6a0", "#f9844a", "#4d908e"];
    var nonCompletedColors = ["#c8e0b6", "#7fb3c9", "#edbd82", "#f09091", "#93c9bb", "#d99d80", "#95e6e3"];

    return (
        <>
            <div className="goal">
                <div className="header">
                    <h2 className="goal-title">{data[2]}</h2>
                    <ProgressBar percent={progressWidth} complete={data[1]} goal={data[0]} />
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

                .goal {
                    clear: both;
                    width: 1000px;
                    background-color: #edf8f5;
                    border-radius: 5px;
                    padding: 10px;
                    margin: 10px;
                    font-size: 16px;
                    height: 300px;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    overflow: auto;
                }

                .goal-title {
                    float: left;
                    width: 200px;
                    margin-right: 20px;
                    margin-bottom: 0px;
                }

                .day {
                    height: 21px;
                    width: 21px;
                    float: left;
                    margin-right: 2px;
                    margin-bottom: 2px;
                }

                .not-reached-day {
                    background-color: #edede9;
                }

                @media only screen and (max-width: 800px) {
                    .goal {
                      width: 90%;
                      height: auto;
                      display: block;
                      background-color: #edf8f5;
                      border-radius: 5px;
                      padding: 10px;
                      margin: 5%;
                      font-size: 16px;
                      overflow: auto;
                    }
                    
                    .goal-title {
                        float: left;
                        margin-bottom: 0px;
                        margin-top: 65px;
                        width: 45%;
                        margin-right: 0px;
                    }

                    .chart {
                        float: left;
                    }

                    .box {
                        margin-left: -5%;
                    }
                  }
            `}</style>
        </>
    );

}