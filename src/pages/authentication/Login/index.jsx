import { useForm } from "react-hook-form";
import UserInput from "../../../shered/UserInput";
import loginimg from '../../../images/banner/banner7.jpg'
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit, formState } = useForm();

    const handleLogin = (data) => {
        console.log(data)
    }

    return (
        <div>
            <div>
                <div className="w-full h-[100vh] relative">
                    <img src={loginimg} alt="" className="w-full h-full brightness-75" />
                </div>
                <Link to='/home' className="absolute top-[22%] left-[44%] right-[44%] border-2 border-primary text-primary flex items-center gap-2 px-2 font-semibold hover:bg-primary hover:text-secondary hover:border-2 hover:border-secondary transition-all duration-300"><Icon icon="icon-park-outline:back" /> Back to home</Link>
                <div className="absolute top-[35%] left-[35%] right-[35%] border-2 border-primary p-4">
                    <h2 className="text-4xl text-primary font-semibold mb-2">Login</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <UserInput label='email' inputType='email' name='email' register={register} formState={formState}/>
                        <UserInput label='password' inputType='password' name='password' register={register} formState={formState}/>
                        <input type="submit" value="Login" className="block mx-auto bg-primary py-1 px-2 rounded-md mt-2 font-semibold hover:bg-[#f559b9] cursor-pointer"/>
                        <p className="text-primary bg-secondary mt-2 flex gap-2 justify-center font-semibold rounded-md">Dont have any account? please <Link to='/registration' className="text-secondary bg-primary rounded-md">Click Registration</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;