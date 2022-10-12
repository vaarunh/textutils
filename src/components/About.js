import React from 'react'

export default function About(props) {


    return (

        <>
            <div className="container" >
                <h2 style={{ color: props.mode === 'light' ? '#343a40' : '#D8E9A8' }}>About Us</h2>
                <hr className="my-3" style={{ color: props.mode === 'light' ? '#343a40' : '#D8E9A8' }} />

                <div className="accordion" id="accordionExample" >
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne"  >
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.mode==='light'?'':'#343a40', color: props.mode==='light'?'#343a40':'#D8E9A8'}}>
                               <strong>Easy to Use </strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                            <div className="accordion-body" style={{ backgroundColor: props.mode === 'light' ? '#D8E9A8' : '#343a40', color: props.mode === 'light' ? '#343a40' : '#D8E9A8' }} >
                           <strong> Simply type your text in the textbox </strong> on the homepage and click the buttons below to perform magical operations on it.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.mode==='light'?'':'#343a40', color: props.mode==='light'?'#343a40':'#D8E9A8'}}>
                            <strong>Free to use </strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ backgroundColor: props.mode === 'light' ? '#D8E9A8' : '#343a40', color: props.mode === 'light' ? '#343a40' : '#D8E9A8' }}>
                            <strong>TextUtils is a free character counting utility that generates quick character and word counts for a supplied text. </strong> The quantity of words and characters is reported by TextUtils. As a result, it is appropriate for creating text with a word/character restriction.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree" >
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.mode==='light'?'':'#343a40', color: props.mode==='light'?'#343a40':'#D8E9A8'}}>
                            <strong>Browser Compatible </strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ backgroundColor: props.mode === 'light' ? '#D8E9A8' : '#343a40', color: props.mode === 'light' ? '#343a40' : '#D8E9A8' }}>
                            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
