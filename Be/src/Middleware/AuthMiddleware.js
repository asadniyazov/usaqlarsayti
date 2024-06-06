import  jwt from 'jsonwebtoken'

const Token_Key="w#$@&%&DJhgf"


export const  AuthMiddleware  =(role) => {
    return(req, res, next) => {
        try{
        let token=req.headers.authorization
        if (!token  || !token.startsWith("Bearer")) {
            return res.status(400).json({message:"UnAuthorized"})
        }
        token =token.slice(7)
        let decoded = jwt.verify(token, Token_Key)
        if (!role.includes(decoded.role)) {
         return res.status(400).json({message:"You dont have permission"})
     
        }
       
        req.esed=decoded
        next()
    
       } catch (error) {
         return res.status(400).json({message:error})
       }
    }}