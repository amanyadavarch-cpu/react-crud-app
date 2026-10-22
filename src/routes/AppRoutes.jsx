import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import UserCard from "../Pages/UserCard";
import UserForm from "../Pages/UserForm";


const AppRoutes = ({userData, setUserData}) => {
  return (
    <div className="flex flex-1">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/user-card" element={<UserCard userData={userData}/>} />
        <Route path="/user-form" element={<UserForm setUserData={setUserData} />} />
      </Routes>
    </div>
  )
}

export default AppRoutes
 