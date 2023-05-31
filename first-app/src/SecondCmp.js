import React from "react";
import './MyStyle.css';
import img1 from './image/gg.jpeg';
const SecondCmp=()=>{
    return(
        <div>
            <h2 className="my-animation">두번째 컴포넌트</h2>
            <h3 className="msg1">Happy Day!!</h3>
            <img alt="사진1" src={img1} className="my-animation" style={{width:'200px'}}/>

        </div>
    )
}
export default SecondCmp;
