import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const Navbar = () => {
    const cookie = new Cookies()
    const [user, setUser] = useState(false)
    const token = cookie.get('token', { path: '/' })
    const navigate = useNavigate()

    useEffect(() => {
        if (token) {
            setUser(true);
        } else {
            setUser(false);
            navigate('/login')
        }
    }, [token, user, navigate])

    const navItems = [
        {
            name: 'Home',
            path: '/home'
        },
        {
            name: 'Destination',
            path: '/destination'
        },
        {
            name: 'About',
            path: 'about'
        }
    ]
    return (
        <div className="flex justify-between px-6 bg-primary items-center h-[70px]">
            <div>
                <h2 className="text-2xl font-bold text-[#505050] sm:hidden md:block"><span className="text-secondary">H</span>appy <span className="text-secondary">T</span>ravel</h2>
            </div>
            <div>
                <ul className="flex gap-6 py-5 text-lg font-semibold text-secondary">
                    {
                        navItems.map((item, index) => (
                            <Link key={index} to={item.path} className="hover:border-b-2 hover:border-secondary h-[30px] transition-all duration-300 cursor-pointer">{item.name}</Link>
                        ))
                    }
                </ul>
            </div>
            <div>
                {
                    !user ? <Link to='/login' className="text-lg font-semibold hover:border-b-2 hover:border-secondary">Login</Link> : <div className="flex gap-2 items-center">
                        <Icon icon="ic:baseline-account-circle" className="text-4xl cursor-pointer" />
                        <button onClick={() => { cookie.remove('token', { path: '/' }); setUser(false) }} className="text-lg font-semibold hover:border-b-2 hover:border-secondary"> Logout</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;