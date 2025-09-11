import { NavLink } from "react-router-dom";
import { useTemaContext } from "../hooks/useTemaContext";

const NavBar = () => {

  const {tema,setTema} = useTemaContext();

  return (
    <>
      {/* bg-gray-800 flex justify-between mb-10 shadow-md */}
      <header className={`flex flex-row justify-between mb-10 shadow-md ${(tema)?"bg-gray-200":"bg-gray-800"}`}>
        <nav className=" py-5">
          <NavLink to="/"  className={({isActive})=> isActive ?"px-2 py-5 text-blue-500 font-bold" :"px-2 py-5 hover:text-blue-300"}>Home</NavLink>
          <NavLink to="/about" className={({isActive})=> isActive ?"px-2 py-5 text-blue-500 font-bold" :"px-2 py-5 hover:text-blue-300"}>About</NavLink>
        </nav>
        <div className="flex items-center">
          <button className="bg-gray-400 text-white me-3 px-4 py-2 rounded-xl hover:scale-110 hover:cursor-pointer" onClick={()=>setTema(!tema)}>
            {(tema)?<i className="fa-solid fa-moon"></i>:<i className="fa-solid fa-sun"></i>}
          </button>          
        </div>
      </header>
    </>
  )
}

export default NavBar