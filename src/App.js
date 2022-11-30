import { Routes, Route } from "react-router-dom";
import SiteNavBar from "./components/SiteNavBar";

import NotFound from "./pages/00_NotFound";
import Home from "./pages/01_Home";
import About from "./pages/02_About";

function App() {
  return(
    <>
      <SiteNavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}
 
export default App;