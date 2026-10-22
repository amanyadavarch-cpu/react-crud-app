import { useEffect, useState } from "react";
import { UserContext } from "./UserContex";

export const UserProvider = ({children})=>{

     const [userData, setUserData] = useState(()=>{
        try {
            const saveData = localStorage.getItem("userData");

            return saveData? JSON.parse(saveData) : [];
        } catch{
           return []; 
        }
     })

    useEffect(()=>{
        localStorage.setItem("userData", JSON.stringify(userData))
    },[userData]);


    const [editingUser, setEditingUser] = useState(null)

    const deleteUser = (id)=>{
        setUserData((prev)=>prev.filter((user)=>user.id !== id))
    }

    const updateUser = (updatedUser)=>{
        setUserData((prev)=>prev.map((user)=>user.id === updatedUser.id ? updatedUser : user))

        setEditingUser(null)
    }

    return(
        <UserContext.Provider value={{userData, setUserData, deleteUser, updateUser, setEditingUser, editingUser}}>
            {children}
        </UserContext.Provider>
    )
}