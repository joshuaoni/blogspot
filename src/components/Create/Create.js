import React from 'react';
import 'tachyons';
import { useNavigate } from 'react-router-dom';
import glasses from '../../images/glasses.png';
import './Create.css';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setTitle, setBody, setPendingState } from '../../Redux/Actions';

const Create = ({user}) => {
    const dispatch = useDispatch();
    const {title, body, isPending} = useSelector(state => {
        return {
            title: state.setTitle.title,
            body: state.setBody.body,
            isPending: state.setPendingState.isPending
        }
    }, shallowEqual)
    
    const onBodyChange = (e) => {
        dispatch(setBody(e.target.value))
        if (e.target.value.length > 2000) {
            document.getElementById('body-format').style.display = 'block';
        } else {
            document.getElementById('body-format').style.display = 'none';
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()  // stops he default action of the event object (the page refreshing when the form is submitted in this case)
        const newBlog = {title, body, user}

        dispatch(setPendingState(true));

        fetch('http://localhost:3003/create', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newBlog)
        })
        .then(resp => resp.json())
        .then(data => {
            if (typeof data === 'object' && data !== null) {
                dispatch(setPendingState(false));
                dispatch(setBody(''))
                dispatch(setTitle(''))
                navigate('/blogs');
            } else {
                dispatch(setPendingState(false));
                document.getElementById('create_error').style.display = 'block';
            }
                
        })

        // const radio = document.querySelector('input[type=radio][name=goat]:checked');
        // radio.checked = false;
        
    }

    const removeError = () => {
        document.getElementById('create_error').style.display = 'none';
    }

    const navigate = useNavigate();   
    // go backward 1 step: navigate(-1)
    // go forward 1 step: navigate(1)

    return (
        <div className='bg-c'>
            <div className='center create pb5'>
                <br></br>
                <h1 id='heading'>Create your own blog!</h1>

                <img alt='' className='shadow-1 mb4 mt4 fl w-100' src={glasses}/>

                <form onSubmit={handleSubmit}>
                    <label>Blog title :</label>
                        <input 
                            className='text' 
                            type='text' 
                            required
                            value={title}
                            onChange={(event)=>dispatch(setTitle(event.target.value))}
                            onFocus={removeError}
                        />
                    <label>Body of blog :</label>
                        <textarea
                            rows='10'
                            required
                            pattern='{2000}'
                            value={body}
                            onChange={onBodyChange}
                            onFocus={removeError}
                        >
                        </textarea>
                        <div style={{display: 'none'}} className='f5 red db fw7' id='body-format'>Body of blog must not contain more than 2000 characters</div>

                    {/* <label>Gender</label>
                        <select
                            required
                            value={gender}
                            onChange={(event)=>dispatch(setGender(event.target.value))}
                        >
                            <option value=''>Choose</option>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                            <option value='Confused'>Confused</option>
                        </select>
                    <h2 className='f3'>Who is your GOAT?</h2>
                        <div className='container mt2 items-center flex'>
                            <label htmlFor='ororo'>Ororo</label>
                            <input 
                                id='ororo'
                                type="radio" 
                                name='goat' 
                                required
                                className='radio' 
                                value="Ororo" 
                                onChange={(event)=>{
                                    dispatch(setGoat(event.target.value))
                                }}
                            />
                        </div>
                        <div className='container flex items-center'> 
                            <label htmlFor='messi'>Messi</label>
                            <input 
                                id='messi'
                                type="radio" 
                                name='goat' 
                                className='radio' 
                                value="Messi" 
                                onChange={(event)=>dispatch(setGoat(event.target.value))}
                            />
                        </div> */}
                    
                    <br></br>
                    <div className='flex'>
                        {isPending ? 
                        <h1 className='center'>Creating Blog...</h1> : 
                        <button className='center btn'>Submit</button>}
                    </div>
                    <div id='create_error' style={{display: 'none'}} className='tc pt2'>
                        <h2 className='f4 red'>Error creating blog, try again</h2>
                    </div>
            
                </form>
            </div>
        </div>
    );
}
 
export default Create;