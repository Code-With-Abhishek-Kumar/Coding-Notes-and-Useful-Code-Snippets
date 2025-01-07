// Card Component's
// Card component mein humne children ko ek prop ke roop mein receive kiya hai.
// Children ko hum props.children se access kar sakte hain or return ke andar{children} ko render karte hain.
// jub hm kisi component main children pass kr dete hain toh wo component main hm  jsx or dusre React components, ya text ko pass kr skte hain
// jub bhi hm kisi component main Children pass kre toh hm us component main opening aur closing tags ke beech kisi bhi component ko pass kr skte hain ya fir jsx ko.


import '../App.css'

const Card = ({ children }) => {
  return (
    <div className='card w-[25vw] h-[55vh] border border-black rounded-md flex flex-col'>
     {children}
    </div>
  )
}

export  default Card;