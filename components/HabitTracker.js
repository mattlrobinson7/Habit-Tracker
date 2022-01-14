import React, { useEffect, useState } from 'react'
import SingleHabit from './SingleHabit';
const Papa = require("papaparse");

export default function HabitTracker(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetchParsedData();
    }, []);

    const parseFile = () => new Promise((resolve) => {
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vSBhmALcpkm-aeIsFX5SpIuSxN0NTcUVGN4NIoAu-jsMr1G7VcQGW48sSBYQwTlAb3Q3qvLWmCVe2KM/pub?gid=0&single=true&output=csv", {
            download: true,
            complete: (results) => {
                resolve(results.data);
            }
        });
    });

    const fetchParsedData = async () => {
        const parsedData = await parseFile();
        setData(parsedData);
        console.log(parsedData);
    }

    return (
        <>
            <div>
                {loading ? (
                    <div>...Data Loading.....</div>
                ) : (
                    <div>
                        <h1 className="description">
                            {props.year} goals
                        </h1>
                        {data.map((row, i) => {
                            // ignore first two rows
                            if (i > 1) {
                                return (<SingleHabit key={i} data={row} index={i} />);
                            }
                            return null;

                        })}
                    </div>)}
            </div>
            <style jsx>{`
                .description {
                    text-align: center;
                }

            `}</style>
        </>
    );

}