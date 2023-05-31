import React from 'react';
import img1 from "../image/black.png";
import img2 from "../image/fire.png";
import img3 from "../image/po.png";

function SixComponent(props) {
    const array1=["red","green","blue","ornge","gray","pink","white","yellow"];

    const array2=[
        {"carphoto":'mycar3.png',"carname":"자스민차","carprice":"1500만"},
        {"carphoto":"mycar13.png","carname":"콤부차","carprice":"6500만"},
        {"carphoto":"mycar5.png","carname":"얼그레이차","carprice":"7500만"},
        {"carphoto":"mycar7.png","carname":"홍차","carprice":"3500만"}
    ];
    return (
        <div>
            <h5 style={{border:'10px solid blue',backgroundColor:'pink'}}>
                오예!!!
            </h5>
            <div>
                <h6>Array 배열 출력하기</h6>
                {
                    array1.map((color,idx)=>(<div key={idx} style={{backgroundColor:color}} className='circle'>{idx+1}</div>))
                }
            </div>
            <div>
                <img alt="" src={img1} width={800} className="black"/>
                <img alt="" src={img2} width={800} className="black"/>
            </div>

            <br style={{clear:'both'}}/>
            <div style={{marginTop:'30px',fontSize:'60px',border:'10px solid red',display:'inline-block'}} className="black">
                <h6>Array2 출력1</h6>
                {array2.map((car, idx) => (
                    <div key={idx}>
                        <img src={require(`../image/${car.carphoto}`)} alt='' className="car-acc"/>
                        <p>{car.carname}</p>
                        <p>{car.carprice}</p>
                    </div>
                ))}
            </div>

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
        </div>

    );
}

export default SixComponent;