import React, {useState} from 'react';

function SixComponent(props) {

    const [inputArray, setInputArray] = useState([]);
    const [data, setData] = useState({
        name: '혀기',
        age: 25,
        hp: '010-2593-2329',
        addr: '서울시 용산구'
    });

    const removeName =(idx)=>{
        setInputArray(inputArray.filter((item,i)=>i!==idx));
    }

    //4개의 input 태그 입력시 호출되는 함수
    const changeData = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        const {name,value}=e.target;

        setData({
            ...data, // 나머지 데이터는 그대로 유지
            [name]:value // name에 해당하는 value만 변경
        })
    }

    //데이터 추가 버튼
    const addButton=()=>{
        setInputArray(inputArray.concat(data));
    }

    //초기화 버튼
    const initButton=()=>{
        setData({
            name:'',
            age:'',
            hp:'',
            addr:''
        })
    }
    return (
        <div>
            <h2 style={{border: '1px solid pink', backgroundColor: 'pink', color: 'white'}}>Six Component - 한꺼번에 묶어서 배열에
                추가</h2>
            <table className='table table-bordered' style={{width: '300px', margin: '0 auto', marginTop: '50px'}}>
                <caption align='top'>데이터 입력</caption>
                <tbody>
                <tr>
                    <th width="100">이름</th>
                    <td>
                        <input type={'text'} name={'name'} className={'form-control'}
                               onChange={changeData} value={data.name}/>
                    </td>
                </tr>
                <tr>
                    <th width="100">나이</th>
                    <td>
                        <input type={'text'} name={'age'} className={'form-control'}
                               onChange={changeData} value={data.age}/>
                    </td>
                </tr>
                <tr>
                    <th width="100">핸드폰</th>
                    <td>
                        <input type={'text'} name={'hp'} className={'form-control'}
                               onChange={changeData} value={data.hp}/>
                    </td>
                </tr>
                <tr>
                    <th width="100">주소</th>
                    <td>
                        <input type={'text'} name={'addr'} className={'form-control'}
                               onChange={changeData} value={data.addr}/>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2} align={'center'}>
                        <button type={"button"} style={{border: '1.5px solid pink', backgroundColor: 'white'}} onClick={addButton}>
                            데이터 추가
                        </button>
                        &nbsp;&nbsp;&nbsp;
                        <button type={"button"} style={{border: '1.5px solid pink', backgroundColor: 'white'}} onClick={initButton}>
                            입력값 초기화
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
            <hr style={{color:'pink'}}/>

            <table className={"table table-bordered"} style={{width: '500px',margin:'0 auto',border:'1px solid #ccc'}}>
                <thead>
                <tr style={{ backgroundColor: 'rgb(248, 243, 153)',height:'auto'}}>
                    <th width={"50"}>번호</th>
                    <th width={"100"}>이름</th>
                    <th width={"80"}>나이</th>
                    <th width={"150"}>핸드폰</th>
                    <th width={"150"}>주소</th>
                    <th width={"100"}>삭제</th>
                </tr>
                </thead>
                <tbody>
                {
                    inputArray.map((item,idx)=>(
                        <tr key={idx}>
                            <td style={{backgroundColor: 'rgb(254, 111, 94)',opacity:'0.7'}}>{idx+1}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.hp}</td>
                            <td>{item.addr}</td>
                            <td>
                                <button type={"button"} style={{border: '1.5px solid pink', backgroundColor: 'white'}}
                                onClick={()=>removeName(idx)}>삭제</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
}

export default SixComponent;