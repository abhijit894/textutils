import React,{useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!","success");
  }

  const handleDownClick = ()=>{
    // console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!","success");
  }

  const handleClearClick = ()=>{
    // console.log("Lowercase was clicked");
    let newText = '';
    setText(newText)
    props.showAlert("Text Clear!","success");
  }


  const handleCopy = (event)=>{
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!","success");
    
  }
  

  const haldleExtraSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Remove extra space!","success");
  }

  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
  
  }

  const [text, setText] = useState('Enter text here');

  
  return (
  <>
    <div className='container' style={{color: props.mode=== 'dark'? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div class="mb-3">
          
          <textarea class="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'? '#042743':'white',color: props.mode=== 'dark'? 'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper</button>
        <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert to Lower</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={haldleExtraSpace}>Remove Extra Spaces</button>
    
    </div>
    <div className="container my-3" style={{color: props.mode=== 'dark'? 'white':'black'}}>
      <h2>your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something above box"}</p>
     </div> 
  </>
  );
}
