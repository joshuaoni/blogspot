import React from 'react';
import './Bottom.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
    faGithub,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";


const Bottom = () => {
    return (
        <div>
            <div className='footer w-100'>
                <div className='platforms-e pr3 w-50'>
                    <div style={{height: '50%'}} className=''>
                        <h3 className='ma0 white platforms f3'>Platforms</h3>
                        <div className='flex justify-end git-link'>
                            <a title='Github source code' href="https://github.com/joshuaoni/blogspot"
                                className="social">
                                <FontAwesomeIcon className='white' icon={faGithub} size="2x" />
                            </a>
                            <a title='My LinkedIn profile' href="https://www.linkedin.com/in/joshua-oni-387850223"
                                className="social">
                                <FontAwesomeIcon className='white' icon={faLinkedin} size="2x" />
                            </a>
                        </div>
                    </div>
                    <div style={{height: '50%'}}>
                        <div className='empty'></div>
                        <div className='envelope-e flex'>
                            <div title='Email' className="white envelope social">
                                <FontAwesomeIcon className='white' icon={faEnvelope} size="2x" />
                            </div>
                            <h2 className='email-m ma0 pl2'>joshuadavidoni@yahoo.com</h2>
                        </div>                                             
                    </div>
                </div>
                <div className='pr2 pl2 pt1 ml2 w-50'>
                    <div className='instructions' style={{height: '50%'}}>
                        <h2 className='tc white ma0 designed f4'>Designed and developed by Joshua</h2>
                    </div>
                    <div style={{height: '5%'}} className=''></div>
                    <div className='copyright' style={{height: '50%'}}>
                        <h2 className='white ma0 f4'>©2022 Joshua Oni</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Bottom;