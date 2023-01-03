import React, {useState} from 'react'



export default function TextForm() {
    const handleUpClick=()=>{
        let newText=text.toUpperCase()
        setText(newText);
    }

    const handleLowClick=()=>{
        let newText=text.toLowerCase()
        setText(newText);
    }

    const handleReverse=()=>{
        setText(text.split("").reverse().join(""));
    }

    const handleClear=()=>{
        setText("");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const [text, setText]= useState("text");
    //setText
    return (
    <>
    <div className="container mb-3">
        <div className='container'>
            <label htmlFor="exampleFormControlTextarea1" className="myBox"><h1>Enter text to analyze:</h1></label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
            <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-primary my-3 mx-2" onClick={handleLowClick}>Convert to Lower Case</button>
            <button className="btn btn-primary my-3 mx-2" onClick={handleReverse}>Reverse the text</button>
            <button className="btn btn-primary my-3 mx-2" onClick={handleClear}>To Clear the Text Area</button>
        </div>
    <div className="container my-3">
        <h2>YOUR TEXT SUMMARY</h2>
        <p>{text.split (" ").length} words and {text.length} characters in your text</p>
        <p>{ 0.008 * text.split (" ").length} minutes taken to read for an averge reader</p>
        <h2>PREVIEW OF THE TEXT</h2>
        <p>{text}</p>
    </div>
    </>
    
  );
}
 