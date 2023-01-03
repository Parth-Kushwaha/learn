import './App.css';
import Navbar from './components/Navbar';
import TextForm from "./components/textForm";
import About from "./components/About";
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode]=useState("light");

  const [alert, setAlert]= useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type:type
    })

    setTimeout(() => {
        setAlert(null)
    }, 1500);

  }
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode has been enabled", "Success")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled", "Success")
    } 
  } 
  return (
    <>
     <Navbar title="TextUtensils " h1="HOME" h2="About" bar="Search" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <TextForm mode={mode} showAlert={showAlert}/>
     {/* <About/> */}
    </>
   
  );
}

export default App;
