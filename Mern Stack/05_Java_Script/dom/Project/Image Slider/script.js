let timer = 0
let currentIndex = 0
let id;
let container = document.getElementById('images')
let images = document.querySelectorAll('.image')
let right_arrow = document.getElementById('right_arrow')
let left_arrow = document.getElementById('left_arrow')

images.forEach(e => {})

let lenght = images.length




let Handle_Anim = () =>{
    container.style.transform = `translate(-${currentIndex * 100}%)`
}



let Handle_Auto_Slide = () => {
  id = setInterval(() => {
    timer += 1



    if (timer >= lenght) {
      timer = 0
      
    }

    

    currentIndex = timer
    Handle_Anim()
   
  }, 5000)
}




Handle_Auto_Slide()





right_arrow.addEventListener('click' , ()=>{
    console.log(currentIndex)
    clearInterval(id)
    currentIndex +=1
    console.log(currentIndex)
    if(currentIndex >= lenght){
        currentIndex = 0
    }
    Handle_Anim()
})


left_arrow.addEventListener('click' , ()=>{
    console.log(currentIndex)
    clearInterval(id)
    
    console.log(currentIndex)

    if(currentIndex ===  0){
        currentIndex = lenght
    }

    currentIndex -=1

    
    Handle_Anim()
})