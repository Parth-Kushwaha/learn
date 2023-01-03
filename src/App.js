import './App.css';
import Navbar from './components/Navbar';
import TextForm from "./components/textForm";

function App() {
  return (
    <>
     <Navbar title="TextUtensils " h1="HOME" h2="About" bar="Search"/>
     <TextForm/>
    </>
   
  );
}

export default App;
