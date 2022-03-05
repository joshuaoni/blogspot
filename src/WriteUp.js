import React from 'react';
import { useParams } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import 'tachyons';

const WriteUp = () => {

    const {id} = useParams();
    const {jsonData: blog, deleteBlogWithin, isPending, error} = BlogDetails('http://localhost:3003/blogs/' + id); //A custom hook
   // the id of the blog which is also the route path in this case is added unto the end-point to fetch a specific blog 

    

    return (
        <div>
            {error && <h1>error 22 : {error} :(</h1>}
            {isPending && <h1>Loading...</h1>}

            {blog && <h1 id='heading'>{blog.title}</h1>}

            {blog && <><h1>{blog.body}</h1></>}
            
            {blog && <div className='flex'><h1 className='padl'>Written by {blog.author}.</h1></div>}

            {blog && <div className='flex'><button className='center btn' onClick={()=>deleteBlogWithin(blog.id)}>Delete blog</button></div>}
        </div>
    );
}
 
export default WriteUp;