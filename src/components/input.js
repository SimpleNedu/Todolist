import React from 'react'
import { useState } from 'react'
import '../styles/input.css'
import { handleText2, handleText, handleSubmit } from '../common/function'
import { input1 } from '../common/function'
import {FaPlusSquare} from 'react-icons/fa'

function Input({dispatch}) {
  
  const [input, setinput] = useState(input1)

  return (
    <form 
      onSubmit={input.id === ''? (e)=>{e.preventDefault()}:
                 (e)=>handleSubmit(e, input, dispatch, setinput)}>
       <div>
        <input
              autoFocus
              type="text" 
              value={input.todo}
              onChange={(e)=>handleText(e, input, setinput)} 
              placeholder='New todo here'/>
          <input 
              type="date"
              onChange={(e)=>handleText2(e, input, setinput)}
              value={input.date}/>
              <button type="submit"><FaPlusSquare/></button>
          {/* <label>
            <FaPlusSquare/>
            <input style={{display: 'none'}} type="submit" value={''}/>
          </label> */}
       </div>
    </form>
  )
}

export default Input