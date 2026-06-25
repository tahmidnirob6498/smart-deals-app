import { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../firebase/AuthContext";
import "../css/navbar.css"

const Navbar = () => {
  const navigate=useNavigate()
  const  {user,logOut}=use(AuthContext)
    const list=<>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/allProducts'>All Products</NavLink></li>
    <li><NavLink to='/myBids'> My Bids</NavLink></li>
    <li><NavLink to='/signUp'>Ragister</NavLink></li>

    
    </>
    const handleLogout=()=>{
   logOut()
   .then(()=>{
   console.log('logout confirmd')
   navigate('/signIn')}).catch(err=>console.log(err))
    }
    
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {
            list
        }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden sm:flex">
    <ul className="menu menu-horizontal px-1">
     {
        list
     }
    </ul>
  </div>
  <div className="navbar-end">
   {user ?<Link onClick={handleLogout}  className="btn text-white gradient-primary" >LogOut</Link> : <Link to='/signIn' className="btn text-white gradient-primary" >Login</Link>}
  </div>
</div>
    );
};

export default Navbar;