import {useContext, useEffect, useRef} from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../context/UserContex";




const UserForm = () => {
  
  const formRef = useRef({})
  const navigate = useNavigate()


  
  let {setUserData, updateUser, editingUser, setEditingUser,} = useContext(UserContext);


  useEffect(()=>{
    if(editingUser){
      formRef.current.name.value = editingUser.name || "";
      formRef.current.email.value = editingUser.email || "";
      formRef.current.imageUrl.value = editingUser.imageUrl || "";
      formRef.current.password.value = ""
    }
  },[editingUser]);



  const handleSubmit = (e)=>{
      e.preventDefault();
      
      
      const name = formRef.current.name.value.trim();
      const email = formRef.current.email.value.trim();
      const password = formRef.current.password.value;
      const imageUrl = formRef.current.imageUrl.value.trim();
      
      if (!name) {
            alert("Name is required");
            return;
          }

      if (!email) {
        alert("Email is required");
        return;
      }

      if (!imageUrl) {
         alert("Image URL is required");
          return;
        }
      if ( !editingUser && password.length < 8) {
            alert("Password must be at least 8 characters");
            return;
          } 
       
      if(editingUser){
        const updatedUser = {...editingUser, 
          name,
          email,
          imageUrl
        };
        updateUser(updatedUser);
      }else{
        const newUser = {
              id: crypto.randomUUID(),
              name,
              email,
              imageUrl
        };

        setUserData((prev)=>[...prev, newUser])
      }


      e.currentTarget.reset();
      setEditingUser(null)
      navigate("/user-card")

  }



  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="w-60 rounded-4xl bg-purple-400 p-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
          <input
            ref={(e)=>(formRef.current.name=e)}
            name="name"
            type="text"
            placeholder="Name"
            className="rounded-3xl border border-white px-3 p-2 text-white focus:border-white focus:outline-none focus:ring-0"
          />
          <input
            ref={(e)=>(formRef.current.email=e)}
            name="email"
            type="email"
            placeholder="email"
            className="rounded-3xl border border-white px-3 p-2 text-white focus:border-white  focus:ring-0"
          />
          <input 
            ref={(e)=>(formRef.current.password=e)}
            name="password"
            type="password"
            placeholder="password"
            className="rounded-3xl border border-white px-3 p-2 text-white focus:border-white focus:outline-none focus:ring-0"
          />
          <input
            ref={(e)=>(formRef.current.imageUrl=e)}
            name="imageUrl"
            type="text"
            placeholder="url"
            className="rounded-3xl border border-white px-3 p-2 text-white focus:border-white focus:outline-none focus:ring-0"
          />
          <button className="self-center rounded-4xl bg-blue-400 px-2 py-1.5 text-white">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default UserForm
