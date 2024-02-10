import Input from "../input"

 const Form=()=>{
    return(
        <div className="bg-white w-[400px] h-[500px] shadow-lg rounded-lg flex flex-col justify-center items-center ">
        <div className="text-4xl font-extrabold ">Welcome</div>
        <div className="text-xl font-light mb-6">Sign up to get started</div>
        <Input label="FullName" name="name" placeholder="Enter your full name" />
        <Input label="Email address" name="email" placeholder="Enter your Email" />
        <Input label="Password" type="password" name="password" placeholder="Enter your password" />
        </div>
    )
}

export default Form