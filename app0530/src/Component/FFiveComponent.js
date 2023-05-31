import React, {useRef, useState} from 'react';

function FFiveComponent(props) {

    const [msg,setMsg]=useState('');
    const nameRef=useRef('');
    const javaRef=useRef(0);
    const sqlRef=useRef(0);
    const springRef=useRef(0);

    const buttonEvent=()=>{
        let name=nameRef.current.value;
        let java=Number(javaRef.current.value);
        let spring=Number(springRef.current.value);
        let sql=Number(sqlRef.current.value);

        let total=java+spring+sql;
        let avg=total/3;

        let s=`
            [시험 결과 확인]
            
            이름 : ${name}
            java : ${java}
            Mysql : ${sql}
            Spring : ${spring}
            
            총점 : ${total}
            평균 : ${avg.toFixed(1)}점
        `;
        //초기화
        nameRef.current.value='';
        javaRef.current.value='';
        sqlRef.current.value='';
        springRef.current.value='';
        nameRef.current.focus();


        setMsg(s)
    }
    return (
        <div style={{width:'600px'}}>
            <div style={{width:'250px',float:'left'}}>
            이름 <input type='text' ref={nameRef}/><br/><br/>
            자바 <input type='text' ref={javaRef}/><br/><br/>
            mysql <input type='text' ref={sqlRef}/><br/><br/>
            spring <input type='text' ref={springRef}/><br/><br/>
                &nbsp;&nbsp;<button type='button' style={{border:"none",backgroundColor:'cornflowerblue',color:'white'}}
            onClick={buttonEvent}>결과확인</button>
            </div>
            <br/>
            <div style={{float:'right',whiteSpace:'pre-line',border:'1px solid orange',width:'300px',height:'500px',fontSize:'25px'}}>
                {msg}
            </div>
        </div>
    );
}

export default FFiveComponent;