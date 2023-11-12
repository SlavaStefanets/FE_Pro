
import React from 'react'
import Info from './Info';

const User = ({hous, adress,boolien, object,}) => {
 
  return (
    <div>
        <div>Hous : {hous}</div>
        <p>Adress : {adress}</p>
        <div>Do you wont :{boolien}</div>
        <div> Person : {object.userName} {object.age}</div>
        <Info hous={hous} adress={adress} boolien={boolien} object={object}></Info> 
    Test1
    </div>
  )
}

export default User;