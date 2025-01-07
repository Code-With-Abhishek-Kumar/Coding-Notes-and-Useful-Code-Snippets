import express from 'express'
// import express from 'express'

const app = express();


app.get('/' , (req , res) =>{
    res.send('Server is ready')
})


app.get('/api/userData' , (req , res) =>{
    let userData = [
        { 
            id: 1,
            name: 'John Doe',
            age: 30,
            email: 'john.doe@example.com'
        },
        { 
            id: 2,
            name: 'Jane Smith',
            age: 25,
            email: 'jane.smith@example.com'
        },
        { 
            id: 3,
            name: 'Michael Johnson',
            age: 28,
            email: 'michael.johnson@example.com'
        },
        { 
            id: 4,
            name: 'Emily Davis',
            age: 32,
            email: 'emily.davis@example.com'
        },
        { 
            id: 5,
            name: 'David Brown',
            age: 27,
            email: 'david.brown@example.com'
        },
        { 
            id: 6,
            name: 'Sarah Wilson',
            age: 31,
            email: 'sarah.wilson@example.com'
        },
        { 
            id: 7,
            name: 'James Lee',
            age: 29,
            email: 'james.lee@example.com'
        },
        { 
            id: 8,
            name: 'Jessica Martinez',
            age: 26,
            email: 'jessica.martinez@example.com'
        },
        { 
            id: 9,
            name: 'Daniel Taylor',
            age: 33,
            email: 'daniel.taylor@example.com'
        },
        { 
            id: 10,
            name: 'Olivia Garcia',
            age: 24,
            email: 'olivia.garcia@example.com'
        },
        { 
            id: 11,
            name: 'Matthew Hernandez',
            age: 35,
            email: 'matthew.hernandez@example.com'
        },
        { 
            id: 12,
            name: 'Sophia Lopez',
            age: 23,
            email: 'sophia.lopez@example.com'
        },
        { 
            id: 13,
            name: 'Andrew Gonzalez',
            age: 27,
            email: 'andrew.gonzalez@example.com'
        },
        { 
            id: 14,
            name: 'Isabella Wilson',
            age: 29,
            email: 'isabella.wilson@example.com'
        },
        { 
            id: 15,
            name: 'Ethan Moore',
            age: 31,
            email: 'ethan.moore@example.com'
        },
        { 
            id: 16,
            name: 'Mia Clark',
            age: 28,
            email: 'mia.clark@example.com'
        },
        { 
            id: 17,
            name: 'Alexander King',
            age: 30,
            email: 'alexander.king@example.com'
        },
        { 
            id: 18,
            name: 'Ava Green',
            age: 26,
            email: 'ava.green@example.com'
        },
        { 
            id: 19,
            name: 'William Baker',
            age: 32,
            email: 'william.baker@example.com'
        },
        { 
            id: 20,
            name: 'Sophie Hill',
            age: 25,
            email: 'sophie.hill@example.com'
        }
    ];
    
    res.send(userData)
    
})



const port = process.env.PORT || 3000;
app.listen(port , (err)=>{
    console.log(`Server at http://localhost:${port}`)
    if (err) console.log(err.message)
})