import React from 'react';

// function SevenChildApp(props) {
//     const buttonStyle = {
//         backgroundColor: '#ffcc00',
//         color: '#ffffff',
//         border: 'none',
//         padding: '10px 20px',
//         fontSize: '16px',
//         borderRadius: '5px',
//         boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
//     };
//
//     return (
//         <div>
//             <h5 style={{
//                 marginBottom: '10px',
//                 height: '100px',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 display: 'flex',
//                 backgroundColor: 'rgb(191, 218, 131)',
//                 color: '#333',
//                 fontFamily: 'Arial',
//                 fontSize: '20px',
//                 fontWeight: 'bold',
//                 padding: '20px',
//                 boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//                 borderRadius: '10px',
//                 textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
//                 transition: 'background-color 0.3s, transform 0.3s',
//                 cursor: 'pointer',
//                 transform: 'scale(1)',
//             }}
//                 onMouseEnter={(e) => {
//                     e.target.style.backgroundColor = '#fce6e6';
//                     e.target.style.transform = 'scale(1.05)';
//                 }}
//                 onMouseLeave={(e) => {
//                     e.target.style.backgroundColor = 'rgb(191, 218, 131)';
//                     e.target.style.transform = 'scale(1)';
//                 }}>
//                 Seven의 자식 컴포넌트<br />
//                 내 이름: {props.name}<br />
//                 나이는 {props.age}살입니다
//                 <button type="button" style={buttonStyle} onClick={props.onIncre}>
//                     증가
//                 </button>
//             </h5>
//
//
//
//         </div>
//     );
// }

// function SevenChildApp(props) {
//     const {name,age,onIncre}=props;
//
//     const buttonStyle = {
//         backgroundColor: '#ffcc00',
//         color: '#ffffff',
//         border: 'none',
//         padding: '10px 20px',
//         fontSize: '16px',
//         borderRadius: '5px',
//         boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
//     };
//
//     return (
//         <div>
//             <h5 style={{
//                 marginBottom: '10px',
//                 height: '100px',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 display: 'flex',
//                 backgroundColor: 'rgb(191, 218, 131)',
//                 color: '#333',
//                 fontFamily: 'Arial',
//                 fontSize: '20px',
//                 fontWeight: 'bold',
//                 padding: '20px',
//                 boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//                 borderRadius: '10px',
//                 textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
//                 transition: 'background-color 0.3s, transform 0.3s',
//                 cursor: 'pointer',
//                 transform: 'scale(1)',
//             }}
//                 onMouseEnter={(e) => {
//                     e.target.style.backgroundColor = '#fce6e6';
//                     e.target.style.transform = 'scale(1.05)';
//                 }}
//                 onMouseLeave={(e) => {
//                     e.target.style.backgroundColor = 'rgb(191, 218, 131)';
//                     e.target.style.transform = 'scale(1)';
//                 }}>
//                 Seven의 자식 컴포넌트<br />
//                 내 이름: {name}<br />
//                 나이는 {age}살입니다
//                 <button type="button" style={buttonStyle} onClick={props.onIncre}>
//                     증가
//                 </button>
//             </h5>
//
//
//
//         </div>
//     );
// }

function SevenChildApp({name,age,onIncre}) {


    const buttonStyle = {
        backgroundColor: '#ffcc00',
        color: '#ffffff',
        border: 'none',
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '5px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    };

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
                Seven의 자식 컴포넌트<br />
                내 이름: {name}<br />
                나이는 {age}살입니다
                <button type="button" style={buttonStyle} onClick={onIncre}>
                    증가
                </button>
            </h5>

        </div>

    );
}

export default SevenChildApp;