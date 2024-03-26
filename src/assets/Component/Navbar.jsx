import { NavLink } from "react-router-dom";


const Navbar = () => {

    const links = <>

        <NavLink
            to='/' className={({ isActive }) => isActive ? 'text-[18px] text-green-500 font-bold' : 'text-[18px] font-bold'}>
            Home
        </NavLink>


        <NavLink
            to='/books' className={({ isActive }) => isActive ? 'text-[18px] text-green-500 font-bold' : 'text-[18px] font-bold'} >
            Listed Books
        </NavLink>


        <NavLink
            to='/pages' className={({ isActive }) => isActive ? 'text-[18px] text-green-500 font-bold' : 'text-[18px] font-bold'} >
            Pages To Read
        </NavLink>

    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  bg-base-100  w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl lg:text-2xl font-bold">Career Hub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1   lg:gap-6">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2 lg:gap-4">
                <a className="btn bg-green-500 text-white">Sign in </a>
                <a className="btn">Sign Up </a>
            </div>
        </div>
    );
};

export default Navbar;