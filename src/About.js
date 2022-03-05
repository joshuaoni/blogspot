import React from 'react';
import 'tachyons';

const About = () => {
    return (
        <div>
            <h1 id='heading'>About Us :</h1>
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
            <div className='mb4'>
                <span className='fl w-third'><img style={{paddingRight: '20px'}}  alt='img' src='https://via.placeholder.com/400x340' /></span>
                <span className='fl w-third'><img style={{padding: '0px 10px'}}  alt='img' src='https://via.placeholder.com/400x340' /></span>
                <span className='fl w-third'><img style={{paddingLeft: '20px'}}  alt='img' src='https://via.placeholder.com/400x340' /></span>
            </div>
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat</h1>
        </div>
    );
}
 
export default About;