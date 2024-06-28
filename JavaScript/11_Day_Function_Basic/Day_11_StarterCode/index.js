function CallMyName(){
    console.log('A')
    console.log('B')
    console.log('H')
    console.log('I')
    console.log('S')
    console.log('H')
    console.log('E')
    console.log('K')
}

CallMyName()

console.log('call function Second Time')

CallMyName()

// why we need 
//  to reuse code 


// parameters and arguments


function myFunction(val){  // () es andr jo hoga parameter
    console.log(val)

}

myFunction(12) // argument

//  Rest Parameter:

function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    return total;
  }
  
  console.log(sum(1, 2)); // Output: 3
  console.log(sum(1, 2, 3, 4)); // Output: 10
  console.log(sum()); // Output: 0 (koi arguments nahi, khali array)
  













// fat arrow function

var a = ()=>{

}

// fat arrow with one Paramenter   


// return 