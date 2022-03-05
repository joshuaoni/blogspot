import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

// This is a custom hook

const BlogDetails = (url) => {
    // const [jsonData, setJsonData] = useState([
    //     {author: 'Josh', title: 'Why Ronaldo Is Better Than Messi', id: 0},
    //     {author: 'Ebuka', title: 'Latest Opp Moves 2022', id: 1},
    //     {author: 'Yusuf Ayomide', title: 'Why I Am Finished', id: 2},
    //     {author: 'Franklin', title: 'Promise Her Marriage', id: 3}
    // ])

    const [jsonData, setJsonData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    const navigate = useNavigate();
    
    useEffect(()=>{
        const newAbortController = new AbortController();

        setTimeout(()=>{
            fetch(url, {signal: newAbortController.signal})     // set the url as the useEffect dependency so that it runs anytime the url you pass from the component using this custom hook changes.
            .then(response => {
                if (!response.ok) {
                    throw Error ('Could not fetch');
                }
                return response.json()
            })                  //for the response object that we get here, if response.ok = true, then we fetched the data from the server successfully. Otherwise, the server might have sent a response object that doesn't contain the data. In this case, the catch block can't catch this error, so we have to throw an Error and catch this error (eg; if the request is denied, or the end-point [meaning url i guess] is faulty)
            .then(data => {
                setJsonData(data)
                setIsPending(false)
                setError(null)
            }).catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    setError(err.message)
                    setIsPending(false)
                }   
            })
        }, 300)
    
        // PROBLEM: if data is still trying to be fetched in a component and then move to another component before the fetch completes, an error occurs.
        return () => newAbortController.abort() // this method aborts whatever fetch the newAbortController is associated with. When the fetch is aborted, it throws an error, so we have to catch this error.
    }, [url]);
    // this leads to an error 'cannot read property of null' because it takes a fraction of time 
    // to fetch the data, and initially the value of jsonData is null. To solve this we use
    // conditionals as shown in Blogs.js


    // function deleteBlog (id) {
    //     const newArray = jsonData.filter((blog) => blog.id !== id);
    //     setJsonData(newArray);
    // }

    function deleteBlog (id) {
        fetch(url + id, {
            method: 'DELETE'
        }).then(()=>navigate(0))
    }

    function deleteBlogWithin (id) {
        fetch(url, {
            method: 'DELETE'
        }).then(()=>navigate('/blogs'))
    }

    return {jsonData, deleteBlog, deleteBlogWithin, isPending, error}    //you can also return them in an array but objects are more convenient
}
 
export default BlogDetails;