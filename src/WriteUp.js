import React from 'react';
import { useParams } from 'react-router-dom';
import BlogDetails from './BlogDetails';

const WriteUp = () => {

    const {i} = useParams();
    const customHookReturns = BlogDetails();    //A custom hook
    const blogs = customHookReturns[0]  
    const isPending = customHookReturns[2]
    const error = customHookReturns[3]
    

    return (
        <div>
            {error && <h1>error 22 : {error} :(</h1>}
            {isPending && <h1>Loading...</h1>}

            {blogs && <h1 id='heading'>{blogs[i].title}</h1>}

            {blogs && <><h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1><h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></h1></>}
            
            {blogs && <h1 className='flex'><p className='padl'>Written by {blogs[i].author}.</p></h1>}
        </div>
    );
}
 
export default WriteUp;