import React, {useState} from 'react';



export default function TextForm(props) {
    const upperCase =() =>{
        console.log("Button Clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const lowerCase =() =>{
        console.log("Button Clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange =(event) =>{
        setText(event.target.value);
}

    const[text, setText] = useState('Enter your text here ');
    return (
        <>
        <div className="container">
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="9" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={upperCase}>Convert to Uppercase</button>
            <button className="btn btn-info mx-2" onClick={lowerCase}>Convert to Lowercase</button>
        </div>
        <hr />
        <div className="container">
            <h2> Your Text Summary</h2>
            <table class="table table-bordered mt-4">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Count</th>
      <th scope="col">Description</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{text.split(" ").length}</td>
      <td>Words Are Present In Your Text</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>{text.length}</td>
      <td>Characters Are Present In Your Text</td>
    </tr>

    <tr>
      <th scope="row">3</th>
      <td>{text.split(" ").length * 0.008}</td>
      <td>Minutes Required to Read Your Text</td>
    </tr>
    
  </tbody>
</table>
<hr/>
<h3 className="mt-4">Preivew</h3>
<div class="alert alert-info" role="alert">
 {text}
</div>
        </div>
        </>
    )
}
