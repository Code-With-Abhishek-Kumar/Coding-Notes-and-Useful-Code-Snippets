class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email, password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const Chai = new Teacher('Chai', 'chai@gmail.com', '123456')

Chai.addCourse()