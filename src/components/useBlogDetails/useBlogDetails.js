import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { requestBlogs } from '../../Redux/Actions.js';


const BlogDetails = (url) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(()=>{
        const newAbortController = new AbortController();
        dispatch(requestBlogs(url, newAbortController));
        return () => newAbortController.abort()
    }, [url]);

    function deleteBlog (blog) {
        const {id} = blog
        fetch('https://agile-beyond-78411.herokuapp.com/delete/' + id, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(data => {
            if (data === 'Deleted Successfully') {
                navigate(0)
            } else if (data === 'An error occured') {
                console.log('An error occured')
            } else {
                console.log('Unknown Error')
            }          
        })
    }

    function deleteBlogWithin (id) {
        fetch('https://agile-beyond-78411.herokuapp.com/delete/' + id, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(data => {
            if (data === 'Deleted Successfully') {
                navigate('/blogs')
            } else if (data === 'An error occured') {
                console.log('An error occured')
            } else {
                console.log('Unknown Error')
            }          
        })
    }

    return {deleteBlog, deleteBlogWithin}    // or return in an array.
}

export default BlogDetails;
