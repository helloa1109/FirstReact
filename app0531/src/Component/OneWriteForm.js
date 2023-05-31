import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import '../write.css';
import InputEmojiWithRef from 'react-input-emoji';
function OneWriteForm({onSave}) {
    const [message,setMessage]=useState('');
    const [irum,setIrum]=useState('');
    const handleOnEnter=(text)=>{
        setMessage(text);
        console.log(text);
    }


    return (
        <div>
            <TextField
            required
            id='outlined-required'
            label='Nickname'
            value={irum}
            onChange={(e)=>setIrum(e.target.value)}
            />
            &nbsp;&nbsp;&nbsp;
            <Button variant='contained' size="small"
            style={{border:'1px solid #ccc',backgroundColor:'transparent',width:'194px',height:'55px'}}
            onClick={()=> {
               if(irum==='') {
                    alert("닉네임을입력해랏!");
                    return;
               }

               if(message==='') {
                   alert("메세지를입력해랏!");
                   return;
               }

               //부모 컴포넌트 입력 데이터를 보낸다
                onSave({irum,message});
               setIrum('');
            }}>등록</Button>

            <br/><br/>

            <InputEmojiWithRef
                cleanOnEnter
                onEnter={handleOnEnter}
                placeholder="Type a message"
            />
        </div>
    );
}

export default OneWriteForm;