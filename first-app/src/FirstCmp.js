import React,{Component} from "react";
import img1 from './image/gg.jpeg';
import img2 from './image/mymycar4.jpg';
//class 로 컴포넌트 생성하기
class FirstCmp extends Component
{ㅌㅈ
    constructor(props)
    {
        super();
        console.log("FirstCmp 생성자 호출")
    }

    render() {
        return (
            <div>
                <h2 style={{color:'coral',borderBottom:'7px solid pink',display:'inline-block',backgroundColor:'black'}} >
                    React 첫 컴포넌트
                </h2>
                <h3>src의 이미지 나타내기</h3>
                <img src={img1}style={{width:'600px',height:'500px',borderRadius:'40px',border:'7px dotted orange',boxShadow: '15px 15px 10px rgba(0, 0, 0, 0.5)'}}/>
                <br/><hr/>
                <img src={img2} style={{width:'300px'}}/>
                {/* public 의 이미지는 상대주소로 */}
                <h3>public 의 이미지 나타내기</h3>
                <img alt="이미지2" src="./car1.png"/>

            </div>

        )
    }
}

//default 로 export 할 경웅 import 시에 이름을 마음대로 정할 수 있다
//export default 는 한번만 가능(한 파일에서)
export {FirstCmp}