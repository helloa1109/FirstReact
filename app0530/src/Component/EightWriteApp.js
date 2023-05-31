import React, {useState} from 'react';

function EightWriteApp({onSave}) {
    const [name,setName]=useState('');
    const [blood,setBlood]=useState('A');
    const [addr,setAddr]=useState('제주도');

    //추가 버튼
    const addButton=()=>{
        // onSave({name:name,blood:blood,addr:addr});
        // key, value 값이 같을 경우 아래 처럼 한번만 쓰면 됨
        onSave({name,blood,addr}) //3개의 변수값에 객체 형태로 data 변수로 들어간다
    }
    return (
        <div>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            <br/>
            <input type='text' value={blood} onChange={(e)=>setBlood(e.target.value)}/>
            <br/>
            <input type='text' value={addr} onChange={(e)=>setAddr(e.target.value)}/>
            <br/>
            <button type={"button"} onClick={addButton}>추가</button>
        </div>
    );
}

export default EightWriteApp;