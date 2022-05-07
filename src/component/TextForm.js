import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
}
const handleLoClick = ()=>{
  let newText = text.toLowerCase();
  setText(newText);
}
const handleRemove = ()=>{
  let newText = "";
  setText(newText);
}
const handleCopy = ()=>{
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
}
const handleSpace = ()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
}
const handleOnChange = (event)=>{
  setText(event.target.value);
}
const [text, setText] = useState("");
  return (
<>
<div class="container" style = {{color: props.mode==='dark'?'white':'black'}}>
     <h1>{props.heading}</h1>
     <div className="mb-3">
     <textarea className="form-control" onChange={handleOnChange} style = {{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} value= {text} id="myBox" rows="8"></textarea>
     </div>
     <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Change in UpparCase</button>
     <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>Change in LowerCase</button>
     <button type="button" className="btn btn-primary mx-2" onClick={handleRemove}>Clear</button>
     <button type="button" className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
     <button type="button" className="btn btn-primary mx-2" onClick={handleSpace}>Remove Extra space</button>
</div>
<div className="container my-4" style = {{color: props.mode==='dark'?'white':'black'}}>
  <h2>Preview Your text:</h2>
  <p>{text.length>0? text:"Enter something to preview"}</p>
<h2>Text details:</h2>
  <p>{text.split(" ").length}words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length} minutes read.</p>
</div>
</>
  )
}
