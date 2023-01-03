import './App.css';
import Navbar from './components/Navbar';
import TextForm from "./components/textForm";
import About from "./components/About";

function App() {
  return (
    <>
     <Navbar title="TextUtensils " h1="HOME" h2="About" bar="Search"/>
     {/* <TextForm/> */}
     <About/>
    </>
   
  );
}

export default App;
