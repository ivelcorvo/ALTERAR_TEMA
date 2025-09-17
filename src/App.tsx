
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";

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
      
    <div className={`min-h-screen p-0 m-0 ${(tema)?"bg-gray-100 text-gray-900":"bg-gray-900 text-white"}`}>
      <BrowserRouter>
        <NavBar></NavBar>
        <div className="flex-grow p-3">
          <Routes>
            <Route path="/"  element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="*"      element={<Navigate to="/" />}></Route>
          </Routes>
        </div>
      </BrowserRouter>        
    </div>
  
  );
}

export default App;
