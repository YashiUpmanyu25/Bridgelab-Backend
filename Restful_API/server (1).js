//url encoded

const express = require('express');
const fs=require('fs');
const users=require('./MOCK_DATA.json');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/api/users',(req,res)=>{
    res.json(users);
});

app.post('/api/users',(req,res)=>{
    const body=req.body;
    const user = {
        id:users.length+1,
        ...body
    };
    users.push(user);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users,null,2),(err)=>{
        if(err){
            return res.status(500).json({msg:"Error creating user"});
        }
        return res.status(201).json({msg:"User created successfully", user:user});

    });
});