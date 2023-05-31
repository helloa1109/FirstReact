import React, {useState} from 'react';
import './MyStyle.css';
import DeleteIcon from '@mui/icons-material/Delete';
import {DeleteForever, DeleteForeverRounded, DeleteSharp} from "@mui/icons-material";
import InputEmojiWithRef from "react-input-emoji";
import { Button } from '@mui/material';
import img1 from '../../app0526/src/image/hos.png';


function FourthCmp(props) {
    const [number,setNumber]=useState(1); // number 변수에 초기값 1지정

    return (
        <div>
            <h2 className="title">4번째 컴포넌트</h2>

            <DeleteIcon className="bounce"/>
            <DeleteSharp/>
            <DeleteForever/>
            <DeleteForeverRounded />
            <InputEmojiWithRef
                style={{width: "100px"}}
                placeholder="메시지를 입력해주세요"
                className="App-logo"/>
            <hr/><br/>
            <img src={img1} className="App-logo"/>
            <a className="stylenum">{number}</a>
            <br/><br/>
            <Button variant="contained" color="success" style={{width:'200px', transition: 'transform 0.3s'}}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'rotate(360deg)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'rotate(0deg)';
                    }}
            onClick={()=>{
                if(number===0) {
                    alert("감소 못함");
                }else {
                    setNumber(number - 1);
                }
            }}
            >
                빙글빙글</Button>
            &nbsp;&nbsp;

            <Button variant="outlined" color="error" style={{width:'200px'}}
            onClick={()=>{
                setNumber(number+1);
            }}
                    >
                빙글빙글</Button>
        </div>
    );
}

export default FourthCmp;