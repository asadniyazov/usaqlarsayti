import React from 'react'
import { useForm } from "react-hook-form"; 


function Login() {

   
        const { register, handleSubmit, watch, formState: { errors } } = useForm();
        const onSubmit = data => console.log(data);
      
        console.log(watch("example")); // watch input value by passing the name of it
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <h1>Login Page</h1>
 

      <form style={{paddingTop:"200px"}} onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
 
    </div>
  )
}

export default Login
