import React, { Fragment,useState,useEffect, useReducer } from 'react';
import NewComponent from './SharedContextComponent/NewComponent';
import { SharedContextProvider } from './SharedContextComponent/SharedContext';
import { Page1, Page3, Status,Page2 } from './UpdateContextComponent/UpdateContextStatus';
import { StatusProvider } from './UpdateContextComponent/UpdateSharedContext';
import UseReducerComponent from './UseReducerComponent/UseReducerComponent'
import HandlingRenderComponent from './HandlingStateComponent/HandlingStateRender'
import MyList from './HandlingEventComponent/HandlingEventComponent'

const items = [
  { id: 0, name: "First" },
  { id: 1, name: "Second" },
  { id: 2, name: "Third" }
];

const App =()=>{

  return(
      <MyList items={items}/>
    )

}
export default App