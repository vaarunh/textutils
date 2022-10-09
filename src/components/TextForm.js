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
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="9" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={upperCase}>Convert to Uppercase</button>
            <button className="btn btn-primary m-2" onClick={lowerCase}>Convert to Lowercase</button>
        </div>
    )
}
