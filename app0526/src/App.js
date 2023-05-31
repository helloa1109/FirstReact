import './App.css';
import React, {useState} from 'react';
import OneComponent from "./components/OneComponent";
import TwoComponent from "./components/TwoComponent";
import ThreeComponent from "./components/ThreeComponent";
import FourComponent from "./components/FourComponent";
import FiveComponent from "./components/FiveComponent";
import SixComponent from "./components/SixComponent";
import SevenComponent from "./components/SevenComponent";
import MunjeComponent from "./components/MunjeComponent";
import Video from './components/ZeroComponent';
import NineComponent from './components/NineComponent';
import OneTwoComponent from "./components/OneTwoComponent";
function App() {
  // const [xy, setXY] = useState({ x: 0, y: 0 });
  // const handleMouseMove = useCallback((e) => {
  //   setXY({ x: e.clientX - 128, y: e.clientY - 48 });
  // }, []);

  const [idx,setIdx]=useState(1);

  const changeComponent=(e)=>{
      // alert(e.target.value,typeof (e.target.value));
    setIdx(Number(e.target.value));
  }
  return (

    <div className="App">
      {/* <img src={img1} style={{ position: 'absolute', left: xy.x, top: xy.y,borderRadius:'100px'}} className="App-logo2" alt="jj" /> */}

        <h2>2023-05-26 리액트 수업</h2>
        <select className='form-select'
                style={{width:'200px',marginLeft:'100px'}}
        onChange={changeComponent}>
        <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
          <option value={4}>Four</option>
          <option value={5}>Five</option>
          <option value={6}>Six</option>
          <option value={7}>Seven</option>
          <option value={8}>Munje</option>
          <option value={9}>영상</option>
          <option value={10}>영상</option>
            <option value={11}>CoverFlow</option>
        </select>
      <br/><br/>
      {idx===1?<OneComponent/>:idx===2?<TwoComponent/>:idx===3?<ThreeComponent/>:
      idx===4?<FourComponent/>:idx===5?<FiveComponent/>:idx===6?<SixComponent/>:idx===7?<SevenComponent/>:idx===8?<MunjeComponent/>:idx===9?<Video/>:idx===10?<NineComponent/>:<OneTwoComponent/>}
    </div>
  );
}

export default App;
