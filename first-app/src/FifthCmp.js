import React, {useState} from 'react';
import img2 from "./image/curo.png";
import img1 from './image/curoo.png';
import img3 from './image/pngwing.com.png';
function FifthCmp(props) {
    const [name,setName]=useState("캔디");
    const [addr,setAddr]=useState("강남구");

    return (
        <div>
            <img src={img1} className='bounce'/>
            <img src={img3} className='bounce'/>
            <h2 className='title'>5번째 컴포넌트</h2>
            <div style={{fontSize:'2em'}} >
                이름 : {name}<br/>
                주소 : {addr}
            </div>

            <input type='text' value={name} style={{width:'500px',height:'100px',fontSize:'60px'}} placeholder='이름입력'
            onChange={(e)=>{
                setName(e.target.value);
            }}/>
            <br/>
            <input type='text' value={addr} placeholder='주소 입력하세요' style={{width:'500px',height:'100px',fontSize:'60px'}}
                   onChange={(e)=>{
                       setAddr(e.target.value);
                   }}/>
        </div>
    );
}

export default FifthCmp;