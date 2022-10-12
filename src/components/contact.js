import React from 'react';


export default function contact(props) {

    return (
        <>
            <div className="container" >
                <h2 style={{ color: props.mode === 'light' ? '#343a40' : '#D8E9A8' }}>Contact TextUtils</h2>
                <hr className="my-3" style={{ color: props.mode === 'light' ? '#343a40' : '#D8E9A8' }} />

                <form action="https://formspree.io/f/mlevlprj" method="POST">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label" style={{ color: props.mode === 'light' ? '#343a40' : '#D8E9A8' }}>Name</label>
                        <input type="text" name="name" className="form-control" id="name" style={{ backgroundColor: props.mode === 'light' ? '#D8E9A8' : '#343a40', color: props.mode === 'light' ? '#343a40' : '#D8E9A8' }}/>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label" style={{ color: props.mode === 'light' ? '#343a40' : '#D8E9A8' }}>Email address</label>
                        <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" style={{ backgroundColor: props.mode === 'light' ? '#D8E9A8' : '#343a40', color: props.mode === 'light' ? '#343a40' : '#D8E9A8' }}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="subject" className="form-label" style={{ color: props.mode === 'light' ? '#343a40' : '#D8E9A8' }}>Subject</label>
                        <input type="text" name="subject" className="form-control" id="subject" style={{ backgroundColor: props.mode === 'light' ? '#D8E9A8' : '#343a40', color: props.mode === 'light' ? '#343a40' : '#D8E9A8' }}/>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label" style={{ color: props.mode === 'light' ? '#343a40' : '#D8E9A8' }}>Your Message</label>
                        <textarea className="form-control" name="message" id="message" rows="4" style={{ backgroundColor: props.mode === 'light' ? '#D8E9A8' : '#343a40', color: props.mode === 'light' ? '#343a40' : '#D8E9A8' }}></textarea>

                    </div>
                    <button type="submit" className="btn btn-success mt-2">Send Your Message</button>
                </form>
            </div>
        </>
    )
}


