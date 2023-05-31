import React, {useRef, useState} from 'react';

function FourComponent(props) {
    const [content,setContent]=useState('');
    const [content2, setContent2]=useState('');

    const contentRef=useRef(''); //변수 선언


    console.log("랜더링중 ...");
    return (
        <div>
            <h2 className='alert alert-success'>Four Component - useRef</h2>
            <textarea style={{width:'300px',height:'100px'}}
                      //한글자 한글자 입력할때마다 렌더링 발생
            onChange={(e)=>{
                setContent(e.target.value);
            }}></textarea>
            <h4 className='alert alert-danger'>{content}</h4>
            <hr/>
            <textarea style={{width:'300px',height:'100px'}} ref={contentRef}></textarea>
            <button type='button'
                    //입력을 하다가 버튼을 누르면 그때 content2 에 값이 들어가면서
                    //렌더링이 발생한다
            onClick={()=>{
                setContent2(contentRef.current.value);
            }}>ref content 적용</button>
            <h4 className='alert alert-danger'>{content2}</h4>
        </div>
    );
}

export default FourComponent;