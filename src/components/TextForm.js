import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick= ()=>{
        // console.log("you have clicked the button " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handlelowClick= ()=>{
        // console.log("you have clicked the button " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

    const handleOnChange = (event)=>{
        // console.log("on change")
        setText(event.target.value)
    }
    
    const [text, setText] = useState('  ');
    //text = "new text";    wrong way
    //setText("new text");   correct way
  return (
    <>
    <div className="container" style={{color : props.mode==='dark'?'white':'black'}}> 
        <h1>{props.heading}</h1>
      <div className="mb-3">
          <textarea className="form-control my-4" value={text} onChange={handleOnChange}  
          style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'White':'dark'}} id="myBox" rows="3"
          placeholder="Enter text here"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to Lowercase</button>
      <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    </div>
    <div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
