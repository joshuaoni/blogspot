import React, { useEffect} from 'react';
import 'tachyons';
import { Link, useNavigate } from 'react-router-dom';
import useBlogDetails from '../useBlogDetails/useBlogDetails';
import Search from '../Search/Search';
import man from '../../images/faceless-man.png';
import './Blogs.css';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setSearchingFor } from '../../Redux/Actions';
    

const Blogs = ({title, user}) => { 
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const createBtn = () => {
        if (user.email === '') {
            document.getElementById('pop_up').style.display = 'block';
        } else {
            navigate('create')
        }
    }

    const { deleteBlog } = useBlogDetails('https://agile-beyond-78411.herokuapp.com/blogs/');  
    
    let {blogs, isPending, error, searchingFor} = useSelector(state => {
        return {
            blogs: state.requestBlogs.blogs,
            isPending: state.requestBlogs.isPending,
            error: state.requestBlogs.error,
            searchingFor: state.setSearchingFor.searchingFor
        }
    }, shallowEqual);

    const uponTyping = (event) => {		
		dispatch(setSearchingFor(event.target.value));
	}		
	
	const filteredBlogs = blogs.filter(blog => {
		return blog.title.toLowerCase().includes(searchingFor.trim().toLowerCase());
	})
    
    useEffect(()=>{
        dispatch(setSearchingFor(''))
    }, [])

    
    return (
        <div className='bg-c'>
            <h1 id='heading' className='mt0 pb3 pt4'>{title}</h1>
            
            <div style={{width: '80%', margin: '0 auto', padding: '0 2vw'}}>
                {blogs && filteredBlogs.length !== 0 && <div className='pb3'><h2 className='scroll-down'>Scroll down to read blogs, or even create a blog of your own!</h2></div> }
            </div>

            <div style={{width: '80%', margin: '0 auto', padding: '0 2vw 5vh 2vw'}}><img alt='' className='shadow-1 w-100' src={man}/></div>

            <div className='blog-top'>
                <Search 
                    uponTyping={uponTyping}
                />

                {error && <h1>error 419 : {error} :(</h1>}

                {isPending && <h1>Loading...</h1>}
            </div>

            {blogs && blogs.length !== 0 && filteredBlogs.map((blog, i)=>{    // the && operator : if the left is false, it doesn't run what is on the right of the operator. However, if the left is true, it moves over to the right of the operator and runs 
                return (
                    <div className='blog-cont' key={blog.id}>
                        <div id='img'className='blogText'>
                            <Link className='w-100' to={`${i}`}>
                                <div className='w-100'>
                                    <h1 style={{color: '#333'}}>Title: <span>{blog.title}</span></h1>
                                    <h1 style={{color: '#333'}}>Author: <span>{blog.author}</span></h1>
                                </div>
                            </Link> 
                            {user.name === blog.author && <button className='btn' onClick={()=>deleteBlog(blog)}>Delete</button>}                       
                        </div>
                        <br></br>
                    </div>
                );
            })}

            {blogs && filteredBlogs.length === 0 && <div className='tc pb3'><h1>No blogs yet</h1></div>}

            <div className='pb5'>
                {blogs && <div className='flex'>
                    <button 
                        onClick={createBtn}
                        className='center btn'>Create your own blog
                    </button>
                </div>}
                <div className='tc' id='pop_up' style={{display: 'none'}}>
                    <h2 className='pt3 f4'>You have to login first.</h2>
                    <h2 className='f4'>Login button can be found on the navigation bar at the top</h2>
                </div>
            </div>

        </div>
    );
    
}


export default Blogs;
