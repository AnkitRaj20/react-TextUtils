import React, { useState } from "react";

const TextForm = (props) => {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    }
    const handleUpClick =() => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLowClick =() => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }
    const handleCopy =() => {
        let copyText = document.getElementById("myBox");
        copyText.select();
        // copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        // setText(copyText);
        props.showAlert("Copied to clipboard :- "+copyText.value, "success");
    }
    const handleClear =() => {
        setText("");
        props.showAlert("Text Cleared", "danger");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/ [  ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces!", "success");
    }
  return (
    <>
    <div className="container" style={{color: props.mode === 'light'?'black':'white' }}>
      <div className="mb-3 my-3">
          <h1> {props.heading} </h1>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          name="text"
          value={text}
          onChange={handleChange}
          style={{backgroundColor: props.mode === 'dark'?'#042743':'white',color:props.mode === 'light'?'black':'white'}}
        ></textarea>
      </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-danger mx-2" onClick={handleClear}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'light'?'black':'white' }}>
        <h1>Your Word Summary</h1>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p> {0.008 * text.split(" ").length } Minutes take to read </p>
        <h2>Preview</h2>
        <p> {text.length>0? text: 'Enter some text in the texbox above to preview it here.'} </p>
    </div>
    </>
  );
};

export default TextForm;
