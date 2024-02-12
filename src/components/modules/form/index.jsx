import { useState } from "react"
import Button from "../button"
import Input from "../input"

 const Form=({
    isSignInPage=false,
 })=>{

    const [data,setData]=useState({
        ...(!isSignInPage&&{
            fullName:''
        }),
        email:'',
        password:''
    });

    return(
        <div className="bg-white w-[400px] h-[500px] shadow-lg rounded-lg flex flex-col justify-center items-center ">
        <div className="text-4xl font-extrabold ">Welcome {isSignInPage&&"Back"}</div>
        <div className="text-xl font-light mb-6">{isSignInPage?"Sign in to get explore more":"Sign up to get started"} </div>
       <form className="flex flex-col items-center w-full" onSubmit={console.log("submitted")}>
       {!isSignInPage&&<Input label="FullName" name="name" placeholder="Enter your full name" value={data.fullName} onChange={(e)=>setData({...data,fullName:e.target.value})}  />}
        <Input label="Email address" type="email" name="email" placeholder="Enter your Email" value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} />
        <Input label="Password" type="password" name="password" placeholder="Enter your password" className="mb-6" value={data.password} onChange={(e)=>setData({...data,password:e.target.value})} />
        <Button label={isSignInPage?"Sign in":"Sign Up"} className="w-1/2" type="submit"/>        
       </form>
        <div>{isSignInPage?"Didn't have an account":"Already have an account"} <span className="text-primary underline">{isSignInPage?"Sign up":"Sign in"}</span></div>
        </div>
    )
}

export default Form