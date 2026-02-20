// const express=require("express");
// const fs=require("fs");
// const users=require("./MOCK_DATA.json");
// const app=express();
// app.use=(express.json());
// app.get("/users",(req,res)=>{
//     const html=`
//     <ul>
//     ${users.map((user) =>`<li>${user.first_name}</li>`).join("")}
//     </ul>
//      ` ;
//     res.send(html);
// });

// //REST API
// // GET METHOD

// // app.get('/users',(req,res)=>{
// //     res.json(users);
// // });
// app.get('/api/users',(req,res)=>{
//     res.json(users);
// });

// app.get('/api/users/:id',(req,res)=>{
//     const id=req.params.id;
//     const user=users.find((u)=> u.id==id);
//     return res.json(user);
// });


// //post method 
// app.post("/api/users",(req,res)=>{
//     //todo: create new user
//     const body=req.body;
//     // users.push({...body, id:users.length+1});
//     const user = {
//         id:users.length+1,
//         ...body
//     };
//     users.push(user);
//     fs.writeFile("./MOCK_DATA.json", JSON.stringify(users,null,2),(err)=>{
//         if(err){
//             return res.status(500).json({msg:"Error creating user"});
//         }
//         return res.status(201).json({msg:"User created successfully", user:user});

//     });
// //     return res.json({msg:"User created successfully"});
// });

// //  /api/users agr sabka same hai
// app.route("/api/users/:id")
// .get((req,res)=>{
//    const id=req.params.id;
//    const user=users.find((u)=> u.id==id);
//     return res.json(user);
// });

// app.patch("/api/users/:id",(req,res)=>{
//     //todo: update the user with give id 
//     return res.json({msg:"User updated successfully"});
// });
// app.delete("/api/users/:id",(req,res)=>{  
//     //todo: delete the user with given id
//     return res.json({msg:"User deleted successfully"});
// });


// app.listen(6000,()=> console.log("server started"));

