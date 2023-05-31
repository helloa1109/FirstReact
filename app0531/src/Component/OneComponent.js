import React, {useState} from 'react';
import '../One.css';
import OneWriteForm from "./OneWriteForm";
import OneArrayList from "./OneArrayList";
function OneComponent(props) {
    const [list, setList] = useState([
        { irum: "혀기", message: "cute", today: new Date() },
        { irum: "효기", message: "nice", today: new Date() }
    ]);
    const addListHandler=(data)=>{
        setList(list.concat(
            {
                ...data,
                today:new Date()
            }
        ));
    }

    const handleRemove = (idx) => {
       setList(list.filter((ele, i) => i !== idx));
    };

    return (
        <div style={{ boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)', background: 'linear-gradient(to right, #12c2e9,#c471ed,#f64f59)', animation: 'fadeIn 1s forwards', height: 'auto' }}>
            <h2 style={{ color: 'white' }}>간단 방명록</h2>
            <OneWriteForm onSave={addListHandler} />
            <hr />
            {list.map((ele, idx) => <OneArrayList key={idx} idx={idx} row={ele}
                                                  onRemove={handleRemove}/>)}
        </div>
    );
}

export default OneComponent;