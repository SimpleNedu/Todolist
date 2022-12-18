export const input1 = {
    id: '',
    todo: '',
    date:  new Date().toISOString().substring(0,10),
    verified: false
  }
export const reducer =(state, action)=>{
    switch (action.type) {
        case 'new todo':
            return [...state, action.payload]
        
    case 'verify':
        return [...action.payload]

    case 'delete':
        return [...action.payload]
    
        default:
            break;
    }
}
export const handleText=(e, input, setinput)=>{
    setinput({...input, 
              todo: e.target.value,
              id: Date.now(new Date())})
  }
export const handleText2=(e, input, setinput)=>{
    setinput({...input, date: e.target.value})
  }
export  const handleSubmit=(e, input, dispatch, setinput)=>{
    e.preventDefault()
    dispatch({type: 'new todo', payload: input})
    setinput(input1)
  }