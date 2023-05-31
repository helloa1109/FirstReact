import React, {useState} from 'react';
import img1 from "../image/black.png";
import img2 from "../image/fire.png";
import img3 from "../image/po.png";

function MunjeComponent(props) {
    const [show, setShow] = useState(true);
    const [myimg, setMyImg] = useState(img1);
    const [text,setText]=useState('');
    const [imageSize, setImageSize] = useState(100);
    const [bor,setBor]=useState('botted');
    const onChangeShow=(e)=>{
        setShow(e.target.checked);
    }

    const onChangeimg=(e)=>{
        setMyImg(e.target.value);
    }

    const changeText=(e)=>{
        setText(e.target.value);
    }

    const increaseImageSize = () => {
        setImageSize((prevSize) => prevSize + 10);
    };

    const decreaseImageSize = () => {
        setImageSize((prevSize) => prevSize - 10);
    };

    const onChangeBorder=(e)=>{
        setBor(e.target.value);
    }
    return (
        <div>
            <h5 style={{fontSize:'50px'}} className='black'>금요일 문제!!!!!</h5>
            <hr/>
            <div>
                <input type='text' className='form-control' style={{width:'300px',marginLeft:'330px'}}
                       onChange={changeText} placeholder="텍스트를 입력해봐~"/>
            </div>


            <input type='checkbox' onClick={onChangeShow}/>숨김
            <label>
                {!show && (
                    <img alt='' src={myimg} style={{
                            borderRadius: '100px',
                            width: `${imageSize}px`,
                            height: `${imageSize}px`,
                        }}
                        className="curo-animation"
                    />
                )}
            </label>
            <br/>
            <div>
            <button type='button' style={{border:'none',backgroundColor:'pink',borderBottom:'3px solid coral'}}
                    onMouseMove={decreaseImageSize}>점점작게</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type='button' style={{border:'none',backgroundColor:'pink',borderBottom:'3px solid coral'}}
                    onMouseMove={increaseImageSize}>점점크게</button>
            </div>
            <div className='input-group' style={{marginTop:'40px',width:'500px',marginLeft:'300px'}}>
                <select  onChange={onChangeimg} className='form-select' style={{width:'500px'}}>
                    <option value={img1}>껌댕이</option>
                    <option value={img2}>켈시퍼</option>
                    <option value={img3}>포뇨포뇨</option>
                </select>
            </div>

            <div className='input-group' style={{marginTop:'40px',width:'500px',marginLeft:'300px'}}>
                <select className='form-select' onChange={onChangeBorder}>
                    <option defaultValue>10px dotted black</option>
                    <option>10px solid pink</option>
                    <option>8px dashed gold</option>
                    <option>8px groove orange</option>
                    <option>8px double coral</option>
                </select>
            </div>

            <div style={{border:bor,height:'50px',width:'500px',marginLeft:'300px',marginTop:'40px'}}>
                {text}
            </div>


        </div>
    );
}

export default MunjeComponent;