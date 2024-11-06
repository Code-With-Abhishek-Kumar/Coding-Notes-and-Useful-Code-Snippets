import React from 'react'





const Card = (props) => {
  return (
    <div className='w-[25vw] h-[45vh] border border-black rounded-md flex flex-col'>
      <img src={props.image} alt="" className='w-full h-[80%]'/>
      <h1 className='text-center text-xl'>{props.title}</h1>
      <h2 className='text-center text-xl'>{props.about}</h2>
    </div>
  )
}



const cardContainer = () => {
  return (
    <div className='w-screen h-screen p-4 flex gap-4 flex-wrap overflow-y-scroll'>


     <Card image="https://i.pinimg.com/736x/1a/28/48/1a2848b5511c8fe795a2cb6ad3dc1d12.jpg" title="Men T Shirt" about="Lorm"/>


     <Card image="https://rukminim2.flixcart.com/image/416/416/jucz98w0/spin-press-launch-toy/2/3/p/b-34-beyblade-burst-attack-starter-starter-zillion-i-w-zeus-with-original-imaffhrbceqdvr4t.jpeg?q=70&crop=false" title="Authfort String " about="Power Launcher Blade for kids ()  (Multicolor)"/>
  
 

     <Card image="https://i.pinimg.com/736x/0a/36/74/0a3674d2b122ecdf236f84d9c6b2c27a.jpg" title="Women Bra" about="Buy Women Bra for Your gf"/>
     <Card image="https://i.pinimg.com/736x/04/90/87/0490870a6fb6125ba0a9b920500dcdd1.jpg" title="Women Bra" about="Buy Women Bra for Your gf"/>
    </div>
  )
}




export default cardContainer;