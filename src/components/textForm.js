import React, {useState} from 'react'



export default function TextForm(props) {

    const [text, setText]= useState("");

    const handleUpClick=()=>{
        let newText=text.toUpperCase()
        setText(newText);
        props.showAlert("Converted to Upper Case", "Success!")
    }

    const handleLowClick=()=>{
        let newText=text.toLowerCase()
        setText(newText);
        props.showAlert("Converted to Lower Case", "Success!")
        
    }

    const handleReverse=()=>{
        setText(text.split("").reverse().join(""));
        props.showAlert("Text has been reversed", "Success!")
    }

    const handleCopy=()=>{
        // var text=document.getElementById("exampleFormControlTextarea1")
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Text Copied to Clipboard", "Success!");
    }

    const handleClear=()=>{
        setText("");
        props.showAlert("Text area has been cleared!", "Success!")
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }


    //setText
    return (
    <>
    <div className="container mb-3" style={{color: props.mode==="dark"? 'white':'#042743'}}>
        <div className='container'>
            <label htmlFor="exampleFormControlTextarea1" className="myBox" ><h1>Enter text to analyze:</h1></label>
            <textarea className="form-control" style={{backgroundColor: props.mode==="dark"? '#13466e':'white', color: props.mode==="dark"? 'white':'#042743'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div >
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleLowClick}>Convert to Lower Case</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleReverse}>Reverse the text</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy to Clipboard</button>
            <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleClear}>To Clear the Text Area</button>
        </div>
    <div className="container my-3" style={{color: props.mode==="dark"? 'white':'#042743'}}>
        <h2>YOUR TEXT SUMMARY</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters in your text</p>
        <p>{ 0.008 * text.split (" ").filter((element)=>{return element.length !== 0}).length} minutes taken to read for an averge reader</p>
        <h2>PREVIEW OF THE TEXT</h2>
        <p>{text.length>0 ? text:"NOTHING TO PREVIEW"}</p>
    </div>
    </>
    
  );
}
 