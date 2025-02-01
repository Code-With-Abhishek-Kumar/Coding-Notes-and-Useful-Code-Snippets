let Box_Container = document.getElementById('Box_Container')
let Add_new_card = document.getElementById('Add_new_card')
let Select_Color = document.getElementById('Select_Color')
console.log(Select_Color.value)

let card_Code = `

                    
                    
                    <form draggable="true">
                        <div class="title">
                            <input type="text" name="title"
                            placeholder="Enter Your Title Title Here"
                            class="title">
                            <i class="ri-close-large-line close"></i>
                        </div>

                        <div class="description">
                            <textarea name="description"
                            placeholder="Enter Your Description Here"
                            class="description"></textarea>
                        </div>

                    </form>

           
`

// console.log(box)

Add_new_card.addEventListener('click', e => {
  let div = document.createElement('div')
  div.style.backgroundColor = Select_Color.value
  div.classList.add('box')
  div.innerHTML = card_Code
  Box_Container.appendChild(div)

  let boxs = document.querySelectorAll('.box')

  console.log(boxs)

  boxs.forEach(function (box, index) {
    box.querySelector('.close').addEventListener('click', () => {
      box.remove()
    })

  
    

    box.childNodes[1].addEventListener('dragend', e => {
      console.log('drag end', e)
      console.log(box.offsetWidth)
      box.style.transform = `translate(${e.clientX - box.offsetWidth / 2}px, ${e.clientY - box.offsetHeight / 2}px)`;
    })
  })

  console.log('clicked')
})

