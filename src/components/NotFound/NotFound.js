import React from 'react';
import 'tachyons';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='bg-c'>
            <div style={{minHeight: '90vh'}} className='not-found'>
                <h1 className='mt0 pt3 f1'>Oooooooops...</h1>
                <h1>error 404 :(</h1>
                <h3 className='f3'>Looks like the link you clicked did not match any of our documents</h3>
                <Link className='dark-pink f4' to='/'>Go back to Home Page</Link>
            </div>
        </div>
    );
}
 
export default NotFound;