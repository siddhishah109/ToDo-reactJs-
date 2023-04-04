import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function TodoList(props) {
  return (
      <ul className='listi'><input id='checkbox'  type='checkbox'/>
      <span className='checkeditems'> &nbsp; {props.items} </span>
      <span><DeleteForeverIcon className='delete' onClick={e=>{props.deleteListItem(props.index)}}/></span></ul>
  )
}
