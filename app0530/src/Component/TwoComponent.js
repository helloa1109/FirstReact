import React, { useState } from 'react';

function TwoComponent(props) {
    const [nameArray, setNameArray] = useState(["이상혁", "유재석"]);
    const [name, setName] = useState('');

    const AddName = () => {
        // set 메서드를 연속해서 호출할경우 순차적으로 실행이 안될수도있음
        // 그런경우 NameArray가 변경된 후 name 이 변경되도록 하려면
        // name 은 useEffect 를 이용해서 변경하면 된다
        setNameArray(nameArray.concat(name));
    };

    const RemoveName = (idx) => {
        setNameArray(nameArray.filter((item,i)=>i!==idx));
    };

    return (
        <div>
            <h2 className='alert alert-success'>투 Component 배열 추가 삭제</h2>
            <div className='input-group' style={{ width: '250px' }}>
                <h4 className='alert alert-info' style={{ width: '150px' }}>이름입력</h4>
                <input type='text' className='form-control' style={{ width: '250px' }}
                       value={name} onChange={(e) => setName(e.target.value)} />

                <button type='button' className='btn btn-sm btn-outline-danger' style={{ width: '250px' }}
                        onClick={AddName}>추가</button>
            </div>

            <hr />

            {
                nameArray.map((item, idx) => (
                    <div className='input-group' style={{ width: '300px', marginBottom: '10px' }}
                         key={idx}>
                        <h4 style={{border:'none',borderBottom:'3px solid pink'}}>{item}</h4>
                        <button type='button' className='btn btn-sm btn-danger'
                                style={{ marginLeft: '10px' }}
                                onClick={() => RemoveName(idx)}>삭제</button>
                    </div>
                ))
            }
        </div>
    );
}

export default TwoComponent;
