import React from 'react'
import Render1 from './render'
import { useState } from 'react'

function Filter({state, dispatch}) {
  const [filt, setfilt] = useState({text: '', date: '900987656789987656789876545678870'})
 
  const textFilt = state.filter((data)=>{
      return (data.todo.includes(filt.text) && (Date.parse(data.date)-Date.now()) < Number(filt.date))
    })

    const handleSelect=(e)=>{
      if (e.target.value === 'all') {
        setfilt({...filt, date: '900987656789987656789876545678870'})
      } else if (e.target.value === '6 months') {
        setfilt({...filt, date: 15700000000})
      } else if (e.target.value === 'monthly') {
        setfilt({...filt, date: '2615000000'})
      } else if (e.target.value === '1 week') {
        setfilt({...filt, date: '675000000'})
      }
    }
  
  return (
    <div>
      <div className='filterBox'>
       <div className='filter'>
        <input 
            onChange={(e)=>setfilt({...filt, text: e.target.value})}
            type="text"
            value={filt.text}
            placeholder='Search todo'/>

          <div>
          <label>
            Sort by date
              <select
                onChange={(e)=>{handleSelect(e)}}>
                <option value='all'>All time</option>
                <option value="6 months">6 months</option>
                <option value="monthly">1 month</option>
                <option value="1 week">1 week</option>
              </select>
          </label>
          </div>
       </div>
      </div>
      <Render1
        dispatch={dispatch}
        state={state}
        filteredText={textFilt}
        />
    </div>
  )
}

export default Filter