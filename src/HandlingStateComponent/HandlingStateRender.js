import React, { Fragment, useReducer, useEffect } from 'react';


const initState = {
  option:[
    {name:"first",value:1},
    {name:"second",value:10},
    {name:"third",value:100},
  ],
  quantity:1
}


const reducer = (state,action) =>{
  let newSate
  switch(action.type){
    case "initState":
      return state
    case "increment":
      return {...state,quantity:state.quantity+1}
    case "decrement":
      return {...state,quantity:state.quantity-1}
  }
}

const App = () =>{

  const[{
    option,
    quantity,
    total,
    isDisableIncrement,
    isDisableDecrement
  },dispatch] = useReducer(reducer,initState)

  
  return(
    <Fragment>
      <div>
        <button onClick={(e)=>{dispatch("decrement")}}>-</button>
        <button onClick={(e)=>{dispatch("increment")}}>+</button>
        <section>
          <select>
          </select>
        </section>
      </div>
    </Fragment>
  )
}

export default App