import React, {useState} from "react";
import img1 from "../image/black.png";
import img2 from "../image/fire.png";
import img3 from "../image/po.png";
function ThreeComponent(props) {
    const [name,setName]=useState('');
    const [score,setScore]=useState(0);
    const [grade,setGrade]=useState('');
    const [tcolor,setTcolor]=useState('green');
    const [show,setShow]=useState(true);

    //radio click 이벤트
    const radioChangeColor=(e)=>{
        setTcolor(e.target.value);
    }

    //이름 변경시 바로 적용
    const changeName=(e)=>{
        setName(e.target.value);
    }

    const changeScore=(e)=>{
        if (isNaN(e.target.value)){
            alert("숫자만 입력해라");
            return;
        }
        setScore(Number(e.target.value));
    }

    const writeGrade=(e)=>{
        if(score>=90){
            setGrade("A");
        }else if(score>=80){
            setGrade("B");
        }else if(score>=70){
            setGrade("C");
        }else if(score>=60){
            setGrade("D");
        }else{
            setGrade("탈락");
        }
    }


    return (
        <div style={{backgroundColor:'black',width:'2000px',height:'2000px'}}>
            <h5 style={{border:'10px solid pink',backgroundColor:'coral',height:'100px',alignItems:'center',justifyContent:'center',display:'flex',fontSize:"30px"}}>
                Three componnent 실습
            </h5>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <div className="snowflake"></div>
            <img alt="" width={400} src={require("../image/pngwing.com.png")} className='curo-animation'/>
            <img alt="" width={400} src={require("../image/curoo.png")} className='curo-animation'/>
            <img alt="" width={400} src={require("../image/co.png")} className='curo-animation'/>
            <img alt="" width={500} src={require("../image/l.png")} className='curo-animation'/>
            <div style={{color:'white'}}>
                <label>
                    <input type='radio' name='tcolor'
                           defaultValue={'red'}/>빨강색
                </label>
                &nbsp;&nbsp;
                <label>
                    <input type='radio' name='tcolor'
                           defaultValue={'green'} onClick={radioChangeColor}
                    defaultChecked/>초록색
                </label>
                &nbsp;&nbsp;
                <label>
                    <input type='radio' name='tcolor'
                           defaultValue={'pink'} onClick={radioChangeColor}/>핑크색
                </label>
                &nbsp;&nbsp;
                <label>
                    <input type='radio' name='tcolor'
                           defaultValue={'coral'} onClick={radioChangeColor}/>코랄색
                </label>
                &nbsp;&nbsp;
                <label>
                    <input type='radio' name='tcolor'
                           defaultValue={'aqua'} onClick={radioChangeColor}/>아쿠아
                </label>
            </div>
            <div className='input-group'
                 style={{marginTop:'30px',fontSize:'20px'}}>
                <b>이름 :</b>
                <input type='text' className='form-control'
                onChange={changeName}/>
                &nbsp;&nbsp;
                <b>점수 :</b>
                <input type='text' className='form-control'
                onChange={changeScore}/>

                <button type='button' className='btn btn-outline-danger btn-sm' onClick={writeGrade}>등급계산</button>
            </div>
            <div
                style={{marginTop:'30px',fontSize:'50px',width:'300px',textAlign:'left',marginLeft:'100px',color:tcolor}}>
                이름 :{name}<br/>
                점수 :{score}<br/>
                등급 :{grade}
        </div>

            <h5 style={{color:'white',fontSize:'40px'}}>없지롱 ~ 있지롱 ~</h5>
            <label style={{color:'white'}}>
                <input type='checkbox' defaultChecked
                onClick={(e)=>{
                    setShow(e.target.checked);
                }}/>
                보였따!
            </label>
            {
                    show &&
                <img alt="" src={img1} width={500} className="black"/>

            }
            <img alt="" src={img2} width={500} className="black"/>
            <img alt="" src={img3} width={500} className="black" style={{borderRadius:"800px"}}/>
        </div>
    );
}

export default ThreeComponent;