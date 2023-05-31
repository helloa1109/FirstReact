import React, { useState } from 'react';

function CarComponent(props) {
    const [showImage, setShowImage] = useState(false);

    const handleClick = () => {
        setShowImage(!showImage);
    };

    return (
        <div>
            <h5
                style={{
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
                onClick={handleClick}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#fce6e6';
                    e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgb(191, 218, 131)';
                    e.target.style.transform = 'scale(1)';
                }}
            >
                이름: {props.carname} <br />
                가격: {props.carprice}<br />
            </h5>

            <div
                style={{
                    height: showImage ? '400px' : '0',
                    overflow: 'hidden',
                    transition: 'height 0.3s',
                }}
            >
                <img src={require(`../img/${props.carphoto}`)} alt="" style={{ width: '150px' }} />
            </div>
        </div>
    );
}

export default CarComponent;
