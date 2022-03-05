import React from 'react';
import 'tachyons';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='not-found'>
            <h1 className='f1'>Oooooooops...</h1>
            <h1>error 404 :(</h1>
            <h3 className='f3'>Looks like the link you clicked did not match any of our documents</h3>
            <Link className='dark-pink f4' to='/'>Go back to Home Page</Link>
        </div>
    );
}
 
export default NotFound;