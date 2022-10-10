import React, {useState} from 'react';



export default function TextForm(props) {
    const upperCase =() =>{
        console.log("Button Clicked - UpperCase");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to uppercase.", "primary");
    }

    const lowerCase =() =>{
        console.log("Button Clicked - LowerCase");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to lowecase.", "info");
    }

    const clearText =() =>{
      console.log("Button Clicked - Clear");
      let newText = " ";
      setText(newText);
      props.showAlert("Text field successfully cleared.", "danger");
  }

  const copyText =() =>{
    console.log("Button Clicked - Copy");
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard.", "warning");
}

    const handleOnChange =(event) =>{
        setText(event.target.value);
}

    const[text, setText] = useState('Enter your text here ');
    return (
        <>
        <div className="container">
            <h3 style={{color: props.mode==='light'?'#343a40':'#D8E9A8'}}>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control mt-4" id="myBox" rows="9"value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={upperCase}>Convert to Uppercase</button>
            <button className="btn btn-info mx-2" onClick={lowerCase}>Convert to Lowercase</button>
            <button className="btn btn-success mx-2" onClick={copyText}>Copy To Clipboard</button>
            <button className="btn btn-danger mx-2" onClick={clearText} >Clear Text</button>
        </div>
        <hr style={{color: props.mode==='light'?'#343a40':'#D8E9A8'}} />
        <div className="container">
            <h3 style={{color: props.mode==='light'?'#343a40':'#D8E9A8'}}> Your Text Summary</h3>
            <table className="table table-bordered  mt-4" style={{color: props.mode==='light'?'#343a40':'#D8E9A8'}}>
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
      <td>{text.split(' ')
            .filter(function(n) { return n != '' })
            .length}</td>
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
<hr style={{color: props.mode==='light'?'#343a40':'#D8E9A8'}}/>
<h3 className="mt-4" style={{color: props.mode==='light'?'#343a40':'#D8E9A8'}}>Your Text Preivew</h3>
<div class="alert alert-info mt-4" role="alert">
 {text}
</div>
        </div>
        </>
    )
}
