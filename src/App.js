import './App.css';
// import F1 from './components/F1';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import {HashRouter,Routes,Route} from "react-router-dom"
import {Home,About} from './components/F2'
import Contact from './components/Contact';

function App() {
  return (
    <>
   {/* 
    <F1/> */}
    <HashRouter>
    <Navbar/>
      <Routes>
      <Route path="/" element = {<Home/>}/>
        <Route path="/home" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/contact" element = {<Contact/>}/>
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;
