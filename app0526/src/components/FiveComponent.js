import React from "react";
import img1 from "../image/black.png";

function FiveComponent(props) {

    const names = ["껌댕이", "올라프", "엘사", "라푼젤"];

    const nameList=names.map((item,idx)=>(<li>{idx}:{item}</li>));

    const arrloop=()=>{
        let arr=[];
        for(let i=0;i<names.length;i++){
            arr.push(<h5>{names[i]}</h5>)
        }
        return arr;
    }
    return (
        <div>
            <h5 style={{border: '1px solid pink', backgroundColor: 'coral'}}>
                One componnent 실습
            </h5>
            <h4 style={{fontSize:'70px',listStyle:'none',display:'flex',alignItems:'center',justifyContent:'center'}}>{nameList}</h4>
            <hr/>
            <h4>{arrloop()}</h4>
            {
                names.map((item,idx)=>(<h6>{idx}:{item}</h6>))
            }
            <hr/>

        </div>
    )
}

export default FiveComponent;