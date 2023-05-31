import React, {useEffect, useState} from 'react';
import '../App.css';

function SevenComponent(props) {
    const [array, setArray] = useState(["red", "green", "blue", "ornge"]);

    useEffect(() => {
        const handleMouseOver = (event) => {
            event.target.style.display = 'none'; // Hide the snowflake on mouseover
        };

        const snowflakes = document.querySelectorAll('.snowflake');
        snowflakes.forEach((snowflake) => {
            snowflake.addEventListener('mouseover', handleMouseOver);
        });

        // Clean up the event listeners when the component unmounts
        return () => {
            snowflakes.forEach((snowflake) => {
                snowflake.removeEventListener('mouseover', handleMouseOver);
            });
        };
    }, []);

    return (
        <div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>

            <div>
                <input type='text'
                       onChange={(e)=>{
                           if(e.key==='Enter') {
                               setArray(array.concat(e.target.value));
                               e.target.value='';
                           }
                       }}/>
                <input type='color'
                onBlur={(e)=>{
                  setArray(array.concat(e.target.value));
                }}/>
            </div>
            <div>
                {
                    array.map((color, idx) =>
                        (
                            <div>
                            (<div key={idx} style={{backgroundColor: color}}
                                  className='circle'
                            onClick={()=>{
                                setArray([
                                    ...array.slice(0,idx),
                                    ...array.slice(idx+1,array.length)
                                ])
                            }}>{idx+1}</div>))
                                <span style={{fontSize:'20px'}}>{color}</span>
                            </div>
                    ))
                }
            </div>
        </div>
    );
}

export default SevenComponent;