import React, {useState} from 'react'



export default function TextForm() {
    const handleUpClick=()=>{
        let newText=text.toUpperCase()
        setText(newText);
    }
 
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const [text, setText]= useState("Enter text here");
    //setText
    return (
    <div className="container mb-3">
        <div>
            <label htmlFor="exampleFormControlTextarea1" className="myBox">Enter text to analyze:</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
    </div>
  );
}
 