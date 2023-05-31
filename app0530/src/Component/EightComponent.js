import React, {useState} from 'react';
import EightArrayApp from "./EightArrayApp";
import EightWriteApp from "./EightWriteApp";

function EightComponent(props) {

    const [array,setArray]=useState([
        {"name":"이상혁","blood":"A","addr":"평택"},
        {"name":"오","blood":"AAA","addr":"경기도"},
        {"name":"와","blood":"AAA","addr":"서울"},
    ]);

    const appData=(data)=>setArray(array.concat(data));

    const deleteData=(idx)=>setArray(array.filter((ele,i)=>i!==idx));
    return (
        <div>
            <h5 style={{
                marginBottom: '10px',
                height: '100px',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                backgroundColor: 'rgb(191, 218, 131)',
                color: '#333',
                fontFamily: 'Arial',
                fontSize: '20px',
                fontWeight: 'bold',
                padding: '20px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                transition: 'background-color 0.3s, transform 0.3s',
                cursor: 'pointer',
                transform: 'scale(1)',
            }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#fce6e6';
                    e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgb(191, 218, 131)';
                    e.target.style.transform = 'scale(1)';
                }}>
                에잇컴포넌트
            </h5>
            <EightWriteApp onSave={appData}/>
            <table className={'table table-bordered'} style={{width:'400px'}}>
                <thead>
                <tr>
                    <th width={"60"}>번호</th>
                    <th width={"70"}>이름</th>
                    <th width={"70"}>혈액형</th>
                    <th width={"100"}>주소</th>
                    <th>삭제</th>
                </tr>
                </thead>
                <tbody>
                {array.map((ele, idx) => (
                    <EightArrayApp key={idx} row={ele} idx={idx} onDelete={deleteData} />
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default EightComponent;