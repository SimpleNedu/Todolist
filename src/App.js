import Input from "./components/input";
import { useReducer } from "react";
import { reducer } from "./common/function";
import Filter from "./components/filter";
import './App.css'

function App() {

 const [state, dispatch] = useReducer(reducer, [])

  return (
    <div className="App">
      <p className="starter"><a href="mailto:chinedumatthew2001@gmail.com">Simple's</a> todo list</p>
      <Input
        dispatch={dispatch}/>
      {state.length !== 0? <Filter
                            state={state}
                            dispatch={dispatch} />:
                          <p className="alt">add some todos</p>}
    </div>
    // find a way to save in a file locally and write to that file in case of need
  );
}

export default App;
