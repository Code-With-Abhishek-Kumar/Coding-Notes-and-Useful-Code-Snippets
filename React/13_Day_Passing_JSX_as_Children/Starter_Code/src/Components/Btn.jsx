import React from 'react'
import '../App.css'


const Btn = ({Button_name}) => {
  return (
    <input className='btn_red' type="button" value={Button_name} onClick={()=>{
        alert("Thanks bhai Click kr ne k liye")
    }} />
  )
}

export default Btn