import React, {useState} from "react";
import img1 from "../image/black.png";
import img2 from "../image/fire.png";
import img3 from "../image/po.png";

function FourComponent(props) {

    const [bcolor, setBcolor] = useState('green');
    const [show, setShow] = useState(true);
    const [fsize, setFSize] = useState('20px');
    const [myimg, setMyImg] = useState(img1);
    const radioChangeColor = (e) => {
        setBcolor(e.target.value);
    }

    const changeSize = (e) => {
        setFSize(e.target.value);
    }

    const onChangeimg=(e)=>{
        setMyImg(e.target.value);
    }

    const onChangeShow=(e)=>{
        setShow(e.target.checked);
    }

    return (
        <div style={{backgroundColor: "black", color: "white",height:'3000px'}}>
            <h5 style={{border: '1px solid pink', backgroundColor: 'coral'}}>
                One componnent 실습
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
            <div>
                <img alt="" src={img1} width={500} className="black"/>
                <img alt="" src={img2} width={500} className="black"/>
                <img alt="" src={img3} width={500} className="black" style={{borderRadius: "800px"}}/>
            </div>
            <div>
                <img alt="" width={400} src={require("../image/pngwing.com.png")} className='curo-animation'/>
                <img alt="" width={400} src={require("../image/curoo.png")} className='curo-animation'/>
                <img alt="" width={400} src={require("../image/co.png")} className='curo-animation'/>
                <img alt="" width={500} src={require("../image/l.png")} className='curo-animation'/>
            </div>
            <hr/>
            <div style={{fontSize: '40px'}}>
                <label>
                    <input type='radio' name='bcolor' style={{width: '60px', height: '60px'}}
                           defaultValue={'red'} onClick={radioChangeColor}/>빨강색
                </label>
                &nbsp;&nbsp;
                <label>
                    <input type='radio' name='bcolor' style={{width: '60px', height: '60px'}}
                           defaultValue={'green'} onClick={radioChangeColor}
                           defaultChecked/>초록색
                </label>
                &nbsp;&nbsp;
                <label>
                    <input type='radio' name='bcolor' onClick={radioChangeColor} style={{width: '60px', height: '60px'}}
                           defaultValue={'pink'}/>핑크색
                </label>
                &nbsp;&nbsp;
                <label>
                    <input type='radio' name='bcolor' style={{width: '60px', height: '60px'}}
                           defaultValue={'coral'} onClick={radioChangeColor}/>코랄색
                </label>
                &nbsp;&nbsp;
                <label>
                    <input type='radio' name='bcolor' onClick={radioChangeColor} style={{width: '60px', height: '60px'}}
                           defaultValue={'aqua'}/>아쿠아
                </label>
            </div>
            <div
                style={{
                    marginTop: '30px',
                    fontSize: fsize,
                    width: '100%',
                    textAlign: 'center',
                    marginLeft: '100px',
                    backgroundColor: bcolor,
                    justifyContent: 'center'
                }}>
                오늘은 금요일이니까 좀 쉬자
            </div>

            <div>
                <label style={{color: 'white', fontSize: '50px'}}>
                    <input type='checkbox' defaultChecked style={{width: '60px', height: '60px'}}
                           onClick={(e) => {
                               setShow(e.target.checked);
                           }}/>
                    보였따!보였따!보였따!보였따!보였따!보였따!
                </label>
                {
                    show &&
                    <img alt="" src={myimg} width={500} className="black"/>
                }
            </div>

            <div className='input-group'
                 style={{width: "300px", margin: "30px 30px"}}>
                <b>글꼴크기</b>&nbsp;&nbsp;&nbsp;&nbsp;
                <select className='form-select' onChange={changeSize}>
                    <option>40px</option>
                    <option selected>20px</option>
                    <option>50px</option>
                    <option>70px</option>
                </select>
            </div>

            <div className='input-group'>
                <b>사진!</b>
                <select className='form-select' style={{width: '100px', height: '100px'}} onChange={onChangeimg}>
                    <option value={img1}>얍</option>
                    <option value={img2}>얍얍</option>
                    <option value={img3}>얍얍얍</option>
                </select>


                <input type='checkbox' onClick={onChangeShow}/>숨김
                <label>
                    {
                        !show &&
                        <img alt='' src={img1} width={300}/>
                    }
                </label>
            </div>

        </div>
    );
}

export default FourComponent;