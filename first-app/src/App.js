import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import {FirstCmp} from './FirstCmp';
import SecondCmp from './SecondCmp';
import ThirdCmp from "./ThirdCmp";
import FourthCmp from './FourthCmp';
import FifthCmp from './FifthCmp';
import img5 from './image/jj.png';

import './App.css';

function App() {
    const [idx, setIdx] = useState(1);
    const [xy, setXY] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e) => {
        setXY({ x: e.clientX - 138, y: e.clientY - 48 });
    };

    return (
        <div className="App" style={{ cursor: 'none' }} onMouseMove={handleMouseMove}>
            {xy.x}
            <div className="ripple" style={{ left: xy.x, top: xy.y }}></div>
            <img src={img5} style={{ position: 'absolute', left: xy.x, top: xy.y }} className="App-logo2" alt="jj" />
            <br /><br /><br />
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">abcde</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={idx}
                    label="abcde"
                    onChange={(e) => {
                        setIdx(Number(e.target.value));
                    }}
                >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                </Select>
            </FormControl>
            <br /><br /><br />
            {idx === 1 ? <FirstCmp /> : idx === 2 ? <SecondCmp /> : idx === 3 ? <ThirdCmp /> :
                idx === 4 ? <FourthCmp /> : <FifthCmp />}
        </div>
    );
}

export default App;

