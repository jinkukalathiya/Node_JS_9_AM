const express = require('express');
const port = 9000;
const app = express();
app.set('view engine','ejs');
app.use(express.urlencoded());
let studentData = [
    {
        userId : 1,
        name : 'Jinkal Kalathiya',
        email : 'jinkal@gmail.com',
        password : 'jinkal@123',
        phone : '7894561230'
    },
    {
        userId : 2,
        name : 'Vrushank Gotawala',
        email : 'vrushank@gmail.com',
        password : 'vrushank@123',
        phone : '9874561203'
    },
    {
        userId : 3,
        name : 'Yash lad',
        email : 'yash@gmail.com',
        password : 'yash@123',
        phone : '7485912630'
    },
    {
        userId : 4,
        name : 'Saloni Mudrakh',
        email : 'saloni@gmail.com',
        password : 'saloni@123',
        phone : '7485758491'
    },
    {
        userId : 5,
        name : 'Poorab Jate',
        email : 'poojab@gmail.com',
        password : 'poorab@123',
        phone : '8471523609'
    },
    {
        userId : 6,
        name : 'Vansh Sukhiyaji',
        email : 'vansh@gmail.com',
        password : 'vansh@123',
        phone : '9584762130'
    }
]

app.post('/insertData',(req, res) => {
    console.log(req.body);
    let obj = {
        userId : req.body.userId,
        name : req.body.name,
        email : req.body.email,
        password : req.body.pwd,
        phone : req.body.phone
    }
    studentData.push(obj);
    console.log("Student data Added Successfully..")
    return res.redirect('/');
})

app.get('/', (req, res) => {
    console.log(studentData)
    return res.render('form', {
        student : studentData,
    });
});

app.listen(port,(err) => {
    if(err){
        console.log("Server not start");
    }
    console.log("Server start on port : " +port);
})