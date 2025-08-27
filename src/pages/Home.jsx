import { useTemaContext } from "../hooks/useTemaContext";

const Home = () => {
  
  const {tema} = useTemaContext();

  return (
    // container bg-gray-800 mx-auto p-10 rounded-xl shadow-sm text-center
    <div className={`container mx-auto p-10 rounded-xl shadow-md text-center ${(tema==="claro"?"bg-gray-200":"bg-gray-800")}`}>
        <h1 className="text-2xl font-bold">Home</h1>
    </div>
  )
}

export default Home