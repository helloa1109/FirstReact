import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import OneComponent from "./Component/OneComponent";
import TwoComponent from "./Component/TwoComponent";
import ThreeComponent from "./Component/ThreeComponent";
import FourComponent from "./Component/FourComponent";
import FiveComponent from "./Component/FiveComponent";
import SixComponent from "./Component/SixComponent";
import SevenComponent from "./Component/SevenComponent";

function App() {

  const [idx,setIdx]=useState(1);

  const changeComponent=(e)=>{
    // alert(e.target.value,typeof (e.target.value));
    setIdx(Number(e.target.value));
  }

  return (
    <div className="App">
      <select className='form-select'
              style={{width:'200px',marginLeft:'100px'}}
              onChange={changeComponent}>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
        <option value={4}>Four</option>
        <option value={5}>Five</option>
        <option value={6}>six</option>
        <option value={6}>seven</option>
      </select>
      <br/><br/>
      {idx===1?<OneComponent/>:idx===2?<TwoComponent/>:idx===3?<ThreeComponent/>:idx===4?<FourComponent/>
      :idx===5?<FiveComponent/>:idx===6?<SixComponent/>:<SevenComponent/>}
    </div>
  );
}

export default App;
