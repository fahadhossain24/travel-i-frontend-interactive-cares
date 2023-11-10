import { Link } from "react-router-dom";

const Navbar = () => {
    const navItems = [
        {
            name: 'Home',
            path: '/home'
        },
        {
            name: 'Destination',
            path: '/destination'
        }, {
            name: 'Details',
            path: '/details'
        },
        {
            name: 'About',
            path: 'about'
        }
    ]
    return (
        <div className="flex justify-between px-6 bg-primary items-center h-[70px]">
            <div>
                <h2 className="text-2xl font-bold text-[#505050]"><span className="text-secondary">H</span>appy <span className="text-secondary">T</span>ravel</h2>
            </div>
            <div>
                <ul className="flex gap-6 py-5 text-lg font-semibold text-secondary">
                    {
                        navItems.map((item, index) => (
                            <Link key={index} to={item.path} className="hover:border-b-2 hover:border-secondary h-[30px] transition-all duration-300">{item.name}</Link>
                        ))
                    }
                </ul>
            </div>
            <div>
                    <Link to='/login' className="text-lg font-semibold">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;