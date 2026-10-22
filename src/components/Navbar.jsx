import { NavLink } from "react-router";


const Navbar = () => {
  
  return (
    <div className="bg-red-500 text-white p-3 flex justify-between items-center ">
      <h1 className="text-2xl">LOGO</h1>
      <div className="flex gap-4">
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/user-card"}>Card</NavLink>
        <NavLink to={"/user-form"}>Form</NavLink>
      </div>
      <button>Login</button>
    </div>
  )
}

export default Navbar
 