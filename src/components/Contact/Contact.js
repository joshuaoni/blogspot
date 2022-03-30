import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { setResult } from '../../Redux/Actions';

const Contact = () => {
    const form = useRef();
    const dispatch = useDispatch();

    const {result} = useSelector(state => {
        return {
            result: state.setResult.result
        }
    }, shallowEqual);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_c6izr4v', 'template_btgaagn', form.current, 'H9Pf8EA4rCku6kwMg')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        dispatch(setResult(true))
        setTimeout(() => {
            dispatch(setResult(false))
        }, 3000);
    }

    return (
        <div className='cont'>
            <div className='center pb5'>
                <div className='flex justify-center'>
                    <h1 className='pt5' id='heading'>Contact Joshua</h1>
                </div>
                <form ref={form} onSubmit={sendEmail} className=" center" >
                    <div className='boxes w-100'>
                        <div className='mt0 w-40'>
                            <div className="mt0">
                                <label className="f4  fw7 w-100" htmlFor="name">NAME/ORGANIZATION</label>
                                <input 
                                    className="w-100 br1 fw7 f5 pa2 bw0" 
                                    type="text" 
                                    name="name"  
                                    id="name"
                                    required
                                    onChange={(e)=>{
                                        
                                    }}
                                />
                            </div>
                            <div className="">
                                <label className="f4 fw7  w-100" htmlFor="email">EMAIL</label>
                                <input 
                                    className="w-100 br1 pa2 f5 fw7 bw0" 
                                    type="email" 
                                    name="email" 
                                    id="email"
                                    required
                                    onChange={(e)=>{
                                        
                                    }}
                                />
                            </div>
                        </div>    
                        
                        <div className='w-60'>
                            <label className='f4 fw7 w-100'>MESSAGE</label>
                            <textarea
                                className='bw0 br1 pt2 pb2 pr2 pl2 fw7'
                                rows='10'
                                required
                                name='message'
                                onChange={(event)=>{
                                    
                                }}
                            >
                            </textarea>
                        </div>
                    </div>
                    
                    <div className='flex justify-center'>
                        <button className="mt3 pointer btn fw7">SEND</button>
                    </div>
                </form>
                <div>{result ? <h3 className='tc f3'>Your message was sent successfully.<br/> I will contact you soon!</h3> : null}</div>
            </div>
            
        </div>
    );
}
 
export default Contact;