import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import useBlogDetails from '../useBlogDetails/useBlogDetails';
import 'tachyons';
import './WriteUp.css';
import { requestBlogs } from '../../Redux/Actions.js';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';


const WriteUp = ({user}) => {
    const dispatch = useDispatch();

    const {id} = useParams();
    const i = Number(id)

    const { deleteBlogWithin } = useBlogDetails('https://agile-beyond-78411.herokuapp.com/blogs/'); 

    let {blogs, isPending, error, searchingFor} = useSelector(state => {
        return {
            blogs: state.requestBlogs.blogs,
            isPending: state.requestBlogs.isPending,
            error: state.requestBlogs.error,
            searchingFor: state.setSearchingFor.searchingFor
        }
    }, shallowEqual);

    const filteredBlogs = blogs.filter(blog => {
		return blog.title.toLowerCase().includes(searchingFor.trim().toLowerCase());
	})

    useEffect(()=>{
        // const newAbortController = new AbortController();
        dispatch(requestBlogs('https://agile-beyond-78411.herokuapp.com/blogs/'));
        return ;
    }, [])
    
     

    return (
        <div className='bg-c'>
            <div className='App center pb5'>
                {error && <h1>error 22 : {error} :(</h1>}
                {isPending && <h1>Loading...</h1>}

                {blogs.length !== 0  && <h1 className='mt0 pt4' id='heading'>{filteredBlogs[i].title}</h1>}

                {blogs.length !== 0 && <><h1 className='body-b'>{filteredBlogs[i].body}</h1></>}
                
                {blogs.length !== 0 && <div className='flex'><h1 className='padl'>Written by {filteredBlogs[i].author}.</h1></div>}

                {blogs.length !== 0 && blogs[i].author === user.name && <div className='flex'><button className='center btn' onClick={()=>deleteBlogWithin(filteredBlogs[i].id)}>Delete blog</button></div>}
            </div>
        </div>
    );
}
 
export default WriteUp;