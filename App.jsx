import { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from "./formValidation";
import FormPart2 from "./components/form.jsx";
import Table from "./components/table.jsx";
// import { useState } from "react";
// import ChatRoom from "./ChatRoom";
// import Counter from "./App2";
// import Gallary from "./App3";
// import PackingList from "./App4";
import Image from "./image.jsx";
import Form2 from "./formValidationPart2.jsx";
// class Greeting extends Component{
//    render(){
//     return <h1>hello, {this.props.name}!</h1>
//    }
// }

export default function App(){
//   const[roomId,setRoomId]=useState('general');
//   const[show,setShow]=useState(false);
  return (
    <Router>
    <Routes>
    {/* <Greeting name="Sara"/>
    <Greeting name="Binod"/>
    <Greeting name="Vikram"/>
    <Counter/>
    <label>
      Choose the chat room:{' '}
      <select value={roomId} onChange={e=>setRoomId(e.target.value)}>
      <option value="general">General</option>
      <option value="travel">Travel</option>
      <option value="music">Music</option>
      </select>
    </label>
    <button onClick={()=>setShow(!show)}>
      {show ? 'Close chat': 'Open Chat'}
    </button>
    {show && <hr/>}
    {show && <ChatRoom roomId={roomId}/>}<br/> */}
    {/* <Gallary/>
    <Gallary/> */}
    {/* <PackingList/> */}
    {/* <Form/> */}
    <Route path="/" element={<FormPart2 />} />
    <Route path="/table" element={<Table />} />
    {/* <Image/> */}
    </Routes>
    </Router>
  )
}