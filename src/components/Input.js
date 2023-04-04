import {React, useState} from 'react';


function Input(props) {
  const [inputText,setInputText]=useState('');

  return (
    <div className='header'>
      <input className='head' placeholder='TODO List'/>
      <input className='taskName' value={inputText} onChange={e=>{setInputText(e.target.value)}} placeholder='Enter your task'/>
      <button className='Button'  onClick={()=>{props.addList(inputText); setInputText("")}}>+</button>
      <hr/>
    </div>
  )
}

export default Input;
