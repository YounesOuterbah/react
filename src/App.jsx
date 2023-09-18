import "./assets/variables/_global-rules.scss";
import { Header } from "./components/header/Header";
import SingleTour from "./pages/tourPost/SingleTour"
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Login from "./pages/form/Login"
import Register from "./pages/form/Register"
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tour/:id" element={<SingleTour/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
