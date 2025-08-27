import { useTemaContext } from "../hooks/useTemaContext"

const About = () => {
  const {tema} = useTemaContext();
  return (
    // container bg-gray-800 mx-auto p-10 rounded-xl shadow-sm text-center
    <div className={`container mx-auto p-19 rounded-xl text-center shadow-md ${(tema==="claro")?"bg-gray-200":"bg-gray-800"}`}>
        <h1 className="text-2xl font-bold">About</h1>
    </div>
  )
}

export default About