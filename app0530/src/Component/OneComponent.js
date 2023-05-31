import React, {useEffect, useState} from 'react';

function OneComponent(props) {
    const [number,setNumber]=useState(100);
    const [photo,setPhoto]=useState('pngwing.com.png');
    const [visible,setVisible]=useState('hidden');
    useEffect(()=>{
        console.log("처음 딱 한번만 호출")
    },[]);

    useEffect(()=>{
       console.log("userEffect 1");
    }); // 모든 state 변수 변경시 무조건 자동호출

    useEffect(()=>{
       console.log("useEffect 2 -number 변경")
        setVisible(number%3===0? 'visible':'hidden');
    },[number]); //number 값 변경시에만 자동호출

    useEffect(()=>{
        console.log("useEffect 3 - photo 변경")

    },[photo]); //photo 값 변경시에만 자동호출

    const changePhoto=(e)=>{
        setPhoto(e.target.value);
    }
    return (
        <div>
            <h2 className='alert alert-success'>One Component</h2>
            <h1>{number}</h1>
            <button type='button' className='btn btn-primary'
            onClick={()=>{
              setNumber(number-1)
            }}>감소</button>
            &nbsp;&nbsp;&nbsp;
            <button type='button' className='btn btn-primary'
            onClick={()=>{
              setNumber(number+1)
            }}>증가</button>
            <hr/>

            <label>
                <input type='radio' name='photo' defaultValue={'pngwing.com.png'} defaultChecked/>울라프
            </label>
            <label>
                <input type='radio' name='photo' defaultValue={'car4.png'}
                onClick={changePhoto}/>자동차
            </label>
            <label>
                <input type='radio' name='photo' defaultValue={'pngwing.com.png'}
                       onClick={changePhoto}/>애기 울라프
            </label>
            <br/><br/>
            <img alt='' src={require(`../img/${photo}`)} width={250}
            style={{visibility:visible}}/>
        </div>
    );
}

export default OneComponent;