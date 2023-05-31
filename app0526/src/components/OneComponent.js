import React, {useState} from 'react';
import '../App.css';
import car1 from '../image/mycar1.png';

function OneComponent(props) {
    const [carName1,setCarName1]=useState("교통사고 났다");
    const [carName2,setCarName2]=useState("그랜져");

    let message="Have a Good Day!";
    return (
        <div style={{height:'1000px'}}>
            <h5 style={{border:'1px solid pink',backgroundColor:'coral'}}>
                One componnent 실습
            </h5>
            <h4 className='one two'>{message}</h4>
            <img alt="" src={car1} width={400} className="car-animation"/>
            <b>{carName2}</b>
            <br/>
            <h5>require 를 이용해서 src 이미지를 가져오기</h5>
            <img alt='' src={require(`../image/curoo.png`)} width={400} className='curo-animation'/>
            <h4 style={{fontSize:'40px'}} className='car-acc'>{carName1}</h4>
            <img alt='' src={require(`../image/car4.png`)} className='car-animation'/>
            <hr/>
            <div className='input-group'>
                <input type='text' className='form-control'
                placeholder='첫번째차이름'

                onKeyUp={(e)=>{
                    setCarName2(e.target.value);
                }}/>

                <input type='text' className='form-control'
                       placeholder='두번째차이름'
                onKeyUp={(e)=>{
                    if(e.key==='Enter') {
                        setCarName1(e.target.value);
                    }
                }}/>
            </div>
        </div>
    );
}

export default OneComponent;