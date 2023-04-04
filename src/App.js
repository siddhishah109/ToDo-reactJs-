import './App.css';
import React,{useState} from 'react';
import Input from './components/Input';
import TodoList from './components/List';
// import backgroundvideo from '../src/images/video.mp4'; 

function App() { 
  const [listTodo,setListTodo]=useState([]);
  let addList=(inputText)=>{setListTodo([...listTodo,inputText])};
  const deleteListItem =(key)=>{
    let newListTodo=[...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <div className='background'>
      {/* <video autoPlay loop muted id='video'>
        <source src={backgroundvideo} type='video/mp4' />
      </video> */}
      <div className="App">

<Input addList={addList} />

{listTodo.map((listItem,i)=>{
  return <TodoList key={i} items={listItem} index={i} deleteListItem={deleteListItem}/>
})}

  
</div>
    </div>
  );
}

export default App
