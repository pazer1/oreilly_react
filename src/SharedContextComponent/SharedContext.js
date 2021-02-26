import React,{useState, createContext} from 'react'


const MyContext = createContext()

const SharedContextProvider=(props)=>{
  console.log(props.value)
  return(
    <MyContext.Provider value = {props.value}>
      {props.children}
    </MyContext.Provider>
  )
}

const SharedContextConsumer=(props)=>{
  return(
    <MyContext.Consumer >
       {props.children}
   </MyContext.Consumer>
  )
}

export {SharedContextConsumer,SharedContextProvider}