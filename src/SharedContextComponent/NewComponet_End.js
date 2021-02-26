import React from 'react'
import { SharedContextConsumer } from './SharedContext'

const NewComponentEnd=()=>{
  return(
    <SharedContextConsumer>
        {value =><div>
          {<li>user_id : {value.user_id}</li>}
          {<li>user_email : {value.user_email}</li>}
        </div>}
    </SharedContextConsumer>
  )
}
export default NewComponentEnd