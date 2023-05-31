import React, {useState} from 'react';
import SevenChildApp from "./SevenChildApp";
import SevenChildApp2 from "./SevenChildApp2";
/*
부모 자식간 통신하기
1. 부모 컴포넌트에서 자식 컴포넌트로 props 를 통해서 값이나 이벤트를 전달할 수 있다.
2. 자식컴포넌트에서는 부모컴포넌트의 값을 props로 받아서 출력은 가능하지만 직접 변경은 불가능하다
3. 만약 부득이하게 변경을 해야할경우 이벤트를 props로 전달받은 이벤트를 통해서 값변경을 할 수 있다.
4. 자식컴포넌트로 보낼 props는 부모만이 정할 수 있으며 자식 컴포넌트에서는 읽기만 가능.
 */
function SevenComponent(props) {
    const [count,setCount]=useState(0);

    const countIncre=()=>setCount(count+1);
    return (
        <div>
            <h2 className={'alert alert-primary'}>Seven Component</h2>
            <h2>방문 횟수 : {count}</h2>
            <SevenChildApp name={'이'} age={21} onIncre={countIncre}/>
            <SevenChildApp name={'상'} age={30} onIncre={countIncre}/>
            <SevenChildApp name={'혁'} age={61} onIncre={countIncre}/>
            <SevenChildApp2 carname={"울라프"} carprice={"3500만원"} carphoto={"pngwing.com.png"}/>
            <SevenChildApp2 carname={"나의차"} carprice={"5500만원"} carphoto={"car4.png"}/>
        </div>
    );
}

export default SevenComponent;