import express from "express"
import cors from "cors"
import { v4 as uuidv4 } from 'uuid'
import  jwt from 'jsonwebtoken'
import { AuthMiddleware } from "./src/Middleware/AuthMiddleware.js"

 export const Token_Key="w#$@&%&DJhgf"
const app = express()
app.use(express.json())
app.use(cors())



 const users =[{
    id:1,
    email:"asad",
    role:"user",
    password:"asad"
 },
 {
   id:2,
   email:"elvin",
   role:"admin",
   password:"elvin"
}

]


const port = 3100

app.get('/users', AuthMiddleware(["user","admin"]) ,(req, res) => {
  try {
   
   res.status(200).send(users)

  } catch (error) {
    return res.status(400).json({message:error})
  }
})


 app.post('/login', (req, res) => {
   try {
   
      const {email,password}=req.body
      const isUser=users.find(x=>{ return x.email===email})
      if (!isUser) {
         return   res.status(404).json({message:"Not Account"})
      }
      if (isUser.password!==password) {
         return   res.status(401).json({message:"pasword is wrong"})
      }
      var token = jwt.sign({ id:isUser.id,email:isUser.email,role:isUser.role }, Token_Key, { expiresIn: '1h' });
      res.status(200).json({token:token})
   } catch (error) {
       res.status(401).json({message:error})
   }
  })

  app.delete('/delete',AuthMiddleware(["admin"]), (req,res)=>{
   try {
      
      res.status(200).send({message:"ugurlar silindi"})
   
     } catch (error) {
       return res.status(400).json({message:error})
     }
  })


  app.post('/register', (req, res) => {
   const {email,password} =req.body
   const isUser=users.find(x  =>  x.email===email)
   if (isUser) {
      return   res.status(400).json({message:"Email is alrady"})
   }
   users.push({id:uuidv4(),email,password,role:"users"})
   res.send("user created")
  })
  
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})