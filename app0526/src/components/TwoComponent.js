import React, {useState} from "react";
import img1 from "../image/black.png";
import img2 from "../image/fire.png";
import img3 from "../image/po.png";

function TwoComponent(props) {
    const [message,setMessage]=useState('마우스위치');

    const handleEvent=(e)=>{
        setMessage(`마우스 위치 => X좌표 :${e.pageX},Y좌표:${e.pageY}`);
    }
    return (
        <div>
            <h5 style={{border:'1px solid pink',backgroundColor:'coral'}}>
                Two componnent 실습
            </h5>
            <div
                onMouseMove={handleEvent}
                style={{width:'500px',height:'300px',border:'1px solid blue'}}>
                <h5>마우스를 움직이면 좌표가 출력됩니다</h5>
                <br/>
                <h5>{message}</h5>
                <br/>
                <img alt="" src={require("../image/pngwing.com.png")} className='curo-animation'/>
                <img alt="" src={img1} width={500} className="curo-animation"/>
                <img alt="" src={img2} width={500} className="curo-animation"/>
                <img alt="" src={img3} width={500} className="curo-animation" style={{borderRadius: "800px"}}/>
            </div>
        </div>
    );
}

export default TwoComponent