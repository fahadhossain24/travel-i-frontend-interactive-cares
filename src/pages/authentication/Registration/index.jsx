import { useForm } from "react-hook-form";
import UserInput from "../../../shered/UserInput";
import loginimg from '../../../images/banner/banner7.jpg'
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";


const Registration = () => {
    const { register, handleSubmit, formState} = useForm();
    const cookie = new Cookies();
    const navigate = useNavigate()

    const handleRegister = (data) => {
        // console.log(data)
        toast.loading('Loading...')
        axios.post('https://reqres.in/api/register', data).then(res => {
            console.log(res)
            if(res.status === 200){
                cookie.set('token', res.data.token, {path: '/'})
                navigate('/home')
                toast.dismiss()
                toast.success('Registration successfull');
            }
        })
    }

    return (
        <div>
            <div>
                <div className="w-full h-[100vh] relative">
                    <img src={loginimg} alt="" className="w-full h-full brightness-75" />
                </div>
                <Link to='/home' className="absolute top-[22%] left-[44%] right-[44%] border-2 border-primary text-primary flex items-center gap-2 px-2 font-semibold hover:bg-primary hover:text-secondary hover:border-2 hover:border-secondary transition-all duration-300"><Icon icon="icon-park-outline:back" /> Back to home</Link>
                <h2 className="absolute top-[26%] left-[30%] right-[30%] flex justify-center mt-2 text-white">Please use this &ldquo;eve.holt@reqres.in&ldquo; eamil and &ldquo;pistol&ldquo; password</h2>
                <div className="absolute top-[35%] left-[35%] right-[35%] border-2 border-primary p-4">
                    <h2 className="text-4xl text-primary font-semibold mb-2">Registration</h2>
                    <form onSubmit={handleSubmit(handleRegister)}>
                        <UserInput label='Full Name' inputType='name' name='name' register={register} formState={formState} />
                        <UserInput label='Email' inputType='email' name='email' value='eve.holt@reqres.in' register={register} formState={formState} />
                        <UserInput label='password' inputType='password' name='password' value='pistol' register={register} formState={formState} />
                        <input type="submit" value="Registration" className="block mx-auto bg-primary py-1 px-2 rounded-md mt-2 font-semibold hover:bg-[#f559b9] cursor-pointer" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;