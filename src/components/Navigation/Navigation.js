import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import './Navigation.css';

const Navigation = ({reset, user}) => {
    const removePopUp = () => {
        document.getElementById('pop_up').style.display = 'none';
    }

    return (
        <div className='nav-wrap'>
            <nav>
                <div className='pointer justify-center align-c pl4'>
                    <FontAwesomeIcon className='' icon={faPencil} size="1-5x" /><div className='space'></div><h1 style={{display: 'inline'}} className='ma0'> BlogsAreFun</h1>
                </div>
                <div className='links'>
                    <Link to='/'>Home</Link>
                    <Link to='/blogs'>Blogs</Link>
                    <Link to='/about'>About</Link>
                    {user.name !== '' && <Link onClick={reset} to='/signin'>Sign Out</Link>}
                    {user.name === '' && <Link onClick={removePopUp} to='/signin'>Log In</Link>}
                </div>
                <div className='ham'>
                    <div className='hamburger'>
                        <label for="check">
                            <input 
                                type="checkbox" 
                                id="check"
                                onClick={()=>{
                                    document.querySelector('.nav').classList.toggle("div")
                                    document.querySelector('.nav').classList.toggle("show")
                                }}
                            /> 
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                </div>
            </nav>
                    <div class='nav div'>
                        <Link to='/'>Home</Link>
                        <Link to='/blogs'>Blogs</Link>
                        <Link to='/about'>About</Link>
                        {user.name !== '' && <Link onClick={reset} to='/signin'>Sign Out</Link>}
                        {user.name === '' && <Link onClick={removePopUp} to='/signin'>Log In</Link>}
                    </div>
        </div>
    );
}
 
export default Navigation;