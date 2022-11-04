import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick= ()=>{
        // console.log("you have clicked the button " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success")
    }

    const handlelowClick= ()=>{
        // console.log("you have clicked the button " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success")
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

    const handleClearText = ()=>{
      let newText='';
      setText(newText)
      props.showAlert("Text is Cleared!", "success")
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
          style={{backgroundColor:props.mode==='dark'?'#292f56':'white', color:props.mode==='dark'?'White':'black'}} id="myBox" rows="3"
          placeholder="Enter text here"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlelowClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear Text</button>
      <button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    </div>
    <div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to preview!'}</p>

    </div>
    </>
  );
}
