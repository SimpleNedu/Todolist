import React from 'react'
import {FaTrash, FaTimesCircle, FaCheckDouble} from 'react-icons/fa'

function Todo({date, todo, verified, handleClick, handleDelete, id}) {
  return (
    <div className={verified? 'todoitem  bg-black': 'todoitem'}>
        <p
          className='date'>{new Date(date).toDateString()}</p>
        <p
          className={verified? 'todo lineThrough': 'todo'}>{todo}</p>
        <div 
          className='activity'>
          <button 
            className={verified? 'verified': 'notverified'}
            onClick={()=>handleClick(id)}
            >{verified? <FaCheckDouble/>: <FaTimesCircle/>}</button>
            {/* the yes should have a tick icon, while the no should have an appropraite icon
            then the add button on top, you can make more enticing */}
          <button
            className='delete'
            onClick={()=>{handleDelete(id)}}
            ><FaTrash/></button>
            {/* add a delete icon here */}
        </div>
    </div>
  )
}

export default Todo