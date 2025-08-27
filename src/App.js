
import { BrowserRouter,Routes,Route } from "react-router-dom";

// ### COMPONENTS ###
  import NavBar from "./components/NavBar";

// ### PAGES ###
  import Home from "./pages/Home";
  import About from "./pages/About";

// ### HOOKS ###
  import { useTemaContext } from "./hooks/useTemaContext";

// ### OBS: PROVIDER ESTÉ EM index.js ###
function App() {

  const {tema} = useTemaContext();

  return (
      
    <div className={`h-screen p-0 m-0 ${(tema==="claro")?"bg-gray-100 text-gray-900":"bg-gray-900 text-white"}`}>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/home"  element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </BrowserRouter>        
    </div>
  
  );
}

export default App;
