import React, {useState} from 'react';
import 'tachyons';

const Blogs = () => {

    const [blogs] = useState([
        {author: 'Josh', title: 'Why Ronaldo Is Better Than Messi', id: 0},
        {author: 'Ebuka', title: 'Latest Opp Moves 2022', id: 1},
        {author: 'Yusuf Ayomide', title: 'Why I Am Finished', id: 2},
        {author: 'Franklin', title: 'Promise Her Marriage', id: 3}
    ])

    return (
        <div>
            {blogs.map((blog)=>{
                return (
                    <div key={blog.id}> 
                        <div className='blogText'>
                            <h1>Title: <span>{blog.title}</span></h1>
                            <h1>Author: <span>{blog.author}</span></h1>
                        </div>
                        <br></br>
                    </div>
                );
            })}
        </div>
    );
}
 
export default Blogs;