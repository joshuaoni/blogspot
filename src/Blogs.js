import React from 'react';
import 'tachyons';
import { Link } from 'react-router-dom';
import BlogDetails from './BlogDetails';

const Blogs = (props) => {  // props called title passed in to Blogs component
    const {title} = props;  // destructuring

    const [blogs, deleteBlog] = BlogDetails();    //A custom hook

    
    if (blogs === null) {
        return (
       <div>
           <h1 id='heading'>{title}</h1>
           <h1>Loading...</h1>
       </div>          
        );
    } else {
        return (
            <div>
                <h1 id='heading'>{title}</h1>
                {blogs.map((blog, i)=>{
                    return (
                        <div key={blog.id}>
                            <div id='img'className='blogText'>
                                <Link to={`${i}`}>
                                    <div>
                                        <h1>Title: <span>{blog.title}</span></h1>
                                        <h1>Author: <span>{blog.author}</span></h1>
                                    </div>
                                </Link> 
                                <button className='btn' onClick={()=>deleteBlog(blog.id)}>Delete</button>                       
                            </div>
                            <br></br>
                        </div>
                    );
                })}
            </div>
        );
    }
    

    // return (
    //     <div>
    //         <h1 id='heading'>{title}</h1>

    //         {error && <h1>error 419 : {error} :(</h1>}

    //         {isPending && <h1>Loading...</h1>}

    //         {blogs && blogs.map((blog, i)=>{    // the && operator : if the left is false, it doesn't run what is on the right of the operator. However, if the left is true, it moves over to the right of the operator and runs 
    //             return (
    //                 <div key={blog.id}>
    //                     <div id='img'className='blogText'>
    //                         <Link to={`${i}`}>
    //                             <div>
    //                                 <h1>Title: <span>{blog.title}</span></h1>
    //                                 <h1>Author: <span>{blog.author}</span></h1>
    //                             </div>
    //                         </Link> 
    //                         <button className='btn' onClick={()=>deleteBlog(blog.id)}>Delete</button>                       
    //                     </div>
    //                     <br></br>
    //                 </div>
    //             );
    //         })}

    //     </div>
    // );
    
}
 
export default Blogs;