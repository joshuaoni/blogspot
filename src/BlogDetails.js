import {useState} from 'react';

// This is a custom hook

const BlogDetails = () => {
    const [blogs, setBlogs] = useState([
        {author: 'Josh', title: 'Why Ronaldo Is Better Than Messi', id: 0},
        {author: 'Ebuka', title: 'Latest Opp Moves 2022', id: 1},
        {author: 'Yusuf Ayomide', title: 'Why I Am Finished', id: 2},
        {author: 'Franklin', title: 'Promise Her Marriage', id: 3}
    ])

    // const [blogs, setBlogs] = useState(null)
    // const [isPending, setIsPending] = useState(true)
    // const [error, setError] = useState(null)
    
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         fetch('http://localhost:3003/blogs')
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw Error ('Could not fetch');
    //             }
    //             return response.json()
    //         })                  //for the response object that we get here, if response.ok = true, then we fetched the data from the server successfully. Otherwise, the server might have sent a response object that doesn't contain the data. In this case, the catch block can't catch this error, so we have to throw an Error and catch this error (eg; if the request is denied, or the end-point [meaning url i guess] is faulty)
    //         .then(data => {
    //             setBlogs(data)
    //             setIsPending(false)
    //             setError(null)
    //         }).catch(err => {
    //             setError(err.message)
    //             setIsPending(false)
    //         })
    //     }, 300)
        
    // }, []);
    // this leads to an error 'cannot read property of null' because it takes a fraction of time 
    // to fetch the data, and initially the value of blogs is null. To solve this we use
    // conditionals as shown in Blogs.js

    function deleteBlog (id) {
        const newArray = blogs.filter((blog) => blog.id !== id);
        setBlogs(newArray);
    }

    return [blogs, deleteBlog ]
}
 
export default BlogDetails;