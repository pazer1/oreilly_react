import React from 'react'
import { Fragment } from 'react'

const OldComponentEnd =(props)=>{
  return(
    <Fragment>
      <li>User : {props.user.user_id}</li>
      <li>User Email : {props.user.user_email}</li>
    </Fragment>
  )
}
export default OldComponentEnd