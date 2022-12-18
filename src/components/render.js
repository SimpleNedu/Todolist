import React from 'react'
import Todo from './todo'

function Render1({filteredText, state, dispatch}) {
  const handleClick =(id)=>{
    const verified = state.map((data)=>{
      if (data.id === id) {
        return {...data, verified: !data.verified}
      } else {
        return data
      }
    })
    dispatch({type: 'verify', payload: verified})
  }

  const handleDelete =(id)=>{
    const deleted = state.filter((data)=>{
      return data.id !== id
    })
    dispatch({type: 'delete', payload: deleted})
  }

  const data = filteredText.map((todo, index)=>{
  return(
   
         <Todo
          key={index}
          date={todo.date}
          todo={todo.todo}
          verified = {todo.verified}
          handleClick={handleClick}
          handleDelete={handleDelete}
          id={todo.id}/>
  )
})

  return (
    <div>
       <div className={'todoitem  bg-blue'}>
        <p
          className='date'>Date</p>
        <p
          className={'todo'}>todo item</p>
        <div 
          className='activity2'>
          <p
           >status</p>
          <p
            className=''>delete</p>
          
        </div>
    </div>
      {data}
    </div>
  )
}

export default Render1