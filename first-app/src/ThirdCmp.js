import React from "react";
import './MyStyle.css'
function ThirdCmp(props) {
    const style1={
        fontSize:'40px',
        color:'purple',
        border:'3px solid gold'
    }

    const style2={
        textAlign:'center',
        border:'10px solid gray',
        width:'200px'
    }

    let myName = "캔디";
    let myAddr="서울시 강남구";
    return (
        <div>
            <h6 style={style1} className="bounce">세번째 컴포넌트</h6>
            <div className="my-animation">
                {/* 위의 변수값은 출력만 가능하다, 변경은 안됨*/}
                이름 : {myName}<br/>
                주소 : {myAddr}<br/>
            </div>
        </div>
    );
}
export default ThirdCmp;