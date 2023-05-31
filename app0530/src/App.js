import logo from './logo.svg';
import './App.css';
import OneComponent from "./Component/OneComponent";
import TwoComponent from "./Component/TwoComponent";
import ThreeComponent from "./Component/ThreeComponent";
import FourComponent from "./Component/FourComponent";
import FiveComponent from "./Component/FiveComponent";
import FFiveComponent from "./Component/FFiveComponent";
import {useState} from "react";
import SixComponent from "./Component/SixComponent";
import SevenComponent from "./Component/SevenComponent";
import EightComponent from "./Component/EightComponent";
import Visualizer from "./Component/Visualizer";
function App() {
    const [idx,setIdx]=useState(1);

    const changeComponent=(e)=>{
        // alert(e.target.value,typeof (e.target.value));
        setIdx(Number(e.target.value));
    }
  return (
    <div className="App">
      <h2>2023-05-26 리액트 수업</h2>
      <select className='form-select'
              style={{width:'200px',marginLeft:'100px'}}
              onChange={changeComponent}>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
        <option value={4}>Four</option>
        <option value={5}>Five</option>
          <option value={6}>FFive</option>
          <option value={7}>six</option>
          <option value={8}>seven</option>
          <option value={9}>eight</option>
          <option value={10}>visualizer</option>
      </select>
      <br/><br/>
      {idx===1?<OneComponent/>:idx===2?<TwoComponent/>:idx===3?<ThreeComponent/>:
          idx===4?<FourComponent/>:idx===5?<FiveComponent/>:idx===6?<FFiveComponent/>:idx===7?<SixComponent/>:idx===8?<SevenComponent/>:idx===9?<EightComponent/>:<Visualizer/>}
    </div>
  );
}

export default App;
