import React from 'react'

const If_Statements = () => {
  let age = 8;
  let message;
  
  if(age >= 18){
    message = <p>You are adult</p>
  }else{
    message = <p>You are minor</p>
  }

  return (
    <>
    <div>using If_Statements</div>
    <div className="">
      {message}
    </div>
    </>
  )
}

export default If_Statements