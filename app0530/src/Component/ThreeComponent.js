import React, {useRef, useState} from 'react';

function ThreeComponent(props) {
    const [count,setCount] = useState(1);

    const countRef = useRef(1);

    const stateIncreEvent=()=>{
        setCount(count+1);
    }

    const refIncreEvent=()=>{
        countRef.current=countRef.current+1; //값은 변경되지만 렌더링되지는 않는다
        console.log("countRef변수값:"+countRef.current);
    }
    console.log("렌더링중 ....");
    return (
        <div>
            <h2 className='alert alert-success'>쓰리 Component - useRef</h2>
            <h1>{count}</h1>
            <h1>Ref: {countRef.current} </h1>
            <button type='button' onClick={stateIncreEvent}>증가 - state 변수 증가</button>
            <button type='button' onClick={refIncreEvent}>증가 - count ref 로 변수 증가</button>
        </div>
    );
}

export default ThreeComponent;