import React from 'react';
import "../App.css";
import { Delete } from "@mui/icons-material";
import Swal from "sweetalert2";

function OneArrayList(props) {
    const { idx, row, onRemove } = props;

    const handleRemove = () => {
        onRemove(idx);
    };

    const handleClickDelete = () => {
        Swal.fire({
            title: 'P4J & DBC GANG!! J J ',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/images/trees.png)',
            confirmButtonText: 'jj',
            showCancelButton: true,
            cancelButtonColor: 'black',
            cancelButtonText: 'jj',
            backdrop: `
        rgba(0,0,123,0.4)
        url("/img/jj.gif")
        center top
        no-repeat
      `,
        }).then((result) => {
            if (result.isConfirmed) {
                handleRemove(idx);
                Swal.fire("jj gang");
            }else{
                Swal.fire("jj gaaaaaang!!");
            }
        });
    };

    return (
        <div className='rowstyle'>
            <b>{row.irum}</b>
            <span className='day'>
        {row.today.toLocaleTimeString('ko-KR')}&nbsp;
                <Delete
                    style={{
                        cursor: 'pointer',
                        color: 'white',
                        animation: 'bounce 1s infinite',
                    }}
                    onClick={handleClickDelete}
                />
      </span>
            <br /><br />
            <h5><b>{row.message}</b></h5>
        </div>
    );
}

export default OneArrayList;
