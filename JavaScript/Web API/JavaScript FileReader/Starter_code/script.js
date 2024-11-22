let FormEl = document.getElementById('Form_Element');

let img = document.getElementById('img')

FormEl.addEventListener('change',(e)=>{
// alert('gg')
let ImageData = e.target.files[0]
console.log(ImageData)
let reader = new FileReader();
reader.addEventListener('load' , function(e){
    console.log(e.target.result)
    img.src = e.target.result;
     
     
})

  // Handle errors while reading the file
  reader.onerror = function(e) {
    alert("Error reading file: " + e.target.error);
  };

reader.readAsDataURL(ImageData)
// console.log(a)
})