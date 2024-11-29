// Es6

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age; 
    }

    nameUpperCase(){ 
        return this.name.toUpperCase();
    }

  
}



const user = new User('Abhishek' , 12)

console.log(user.nameUpperCase())

/**************************************************************
Behind the scene
 ***********************************************************/



// // Function constructor for User
// function User(name, age) {
//     this.name = name;
//     this.age = age;
//   }
  
//   // Adding a method to the User prototype
//   User.prototype.nameUpperCase = function() {
//     return this.name.toUpperCase();
//   }
  
//   // Creating an instance of User using the `new` keyword
//   const user = new User('ram', 15);
  
//   // Calling the `nameUpperCase` method on the `user` instance
//   console.log(user.nameUpperCase());  // Outputs: AB
  