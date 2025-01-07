import React from 'react'

const Ternary_Operator = () => {
  let age = 20;
  return (
    <>
    <h3>using Ternary Operator</h3>
    <p>you Age is {age} and you are {age >= 18 ? "Adult" : "Minor"}</p>
    </>
  )
}

export default Ternary_Operator