import { useContext} from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { UserContext } from "./context/UserContex";


const App = () => {

  let {userData, setUserData} = useContext(UserContext)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar/>

      <main className="flex flex-1">
        <AppRoutes setUserData={setUserData} userData={userData} />
      </main>
    </div>
  )
}

export default App
