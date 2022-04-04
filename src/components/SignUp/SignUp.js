import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faPencil } from '@fortawesome/free-solid-svg-icons';
import './SignUp.css';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setSignInEmail, setSignInPassword, setWrongDetails, setConfirmPassword, setSignUpName, setPendingState } from '../../Redux/Actions';


const SignUp = () => {
    const dispatch = useDispatch();
    
    const navigate = useNavigate();

    const {signInEmail, signInPassword, wrongDetails, isPending, confirmPassword, signUpName} = useSelector(state => {
        return {
            signInEmail: state.setSignInEmail.signInEmail,
            signInPassword: state.setSignInPassword.signInPassword,
            isPending: state.setPendingState.isPending,
            wrongDetails: state.setWrongDetails.wrongDetails,
            signUpName: state.setSignUpName.signUpName,
            confirmPassword: state.setConfirmPassword.confirmPassword
        }
    }, shallowEqual)
    
    const onInputChange = (e) => {
        dispatch(setSignUpName(e.target.value))
        let alphabets = /^[A-Za-z]+$/;
        if ((e.target.value.match(alphabets) && e.target.value.length >= 2) || e.target.value.length === 0) {
            document.getElementById('name-format').style.display = 'none';
        } else {
            document.getElementById('name-format').style.display = 'block';
        }
    }

    const onEmailChange = (e) => {
        dispatch(setSignInEmail(e.target.value))
        dispatch(setWrongDetails(null))
        let emailChar = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (e.target.value.match(emailChar) || e.target.value.length === 0) {
            document.getElementById('email-format').style.display = 'none';
        } else {
            document.getElementById('email-format').style.display = 'block';
        }
    }

    const onPasswordChange = (e) => {
        dispatch(setSignInPassword(e.target.value))
        dispatch(setWrongDetails(null))
        let {value} = e.target;
        let passwordChar = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,14}$/;
        if (value.match(passwordChar) || value.length === 0) {
            document.getElementById('password-format').style.display = 'none';
        } else {
            document.getElementById('password-format').style.display = 'block';
        }
    }

    const password = document.getElementById('password')
    const confirmPass = document.getElementById('confirm-password')

    const togglePassword1 = () => {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type)
    }
    const togglePassword2 = () => {
        const type = confirmPass.getAttribute('type') === 'password' ? 'text' : 'password';
        confirmPass.setAttribute('type', type)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setPendingState(true))
        const userDetails = {name:signUpName, email:signInEmail, password:signInPassword, confirmPassword }
        
        fetch('https://agile-beyond-78411.herokuapp.com/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userDetails)
        })
        .then(resp => resp.json())
        .then(data => {
            if (typeof data === 'object' && data !== null) {
                dispatch(setWrongDetails(null));
                dispatch(setPendingState(false))
                dispatch(setSignInEmail(''))
                dispatch(setSignInPassword(''))
                dispatch(setConfirmPassword(''))
                dispatch(setSignUpName(''))
                navigate('/signin')
            } else if (data === 'Mismatch') {
                dispatch(setPendingState(false))
                dispatch(setWrongDetails(`Passwords don't match`))
            } else if (data === 'Email already registered') {
                dispatch(setPendingState(false))
                dispatch(setWrongDetails(`Email already registered, please pick another`))
                dispatch(setSignInEmail(''))
            }
        })
    }

    return (
        <div>
            <div className='fullPage'>
                <article className='mv4 w-100 w-50-m w-25-l w-rr center pa3 bw2'>
                    <form 
                        onSubmit={handleSubmit}
                    >
                        <fieldset id="sign_up" className=" b--transparent ph0 mh0">
                            <div className='pointer justify-center align-c'>
                                <FontAwesomeIcon className='' icon={faPencil} size="2x" /><div className='space'></div><h1 style={{display: 'inline'}} className='fw7 f2 ma0'> BloggingFun</h1>
                            </div>
                            <div className="mt3">
                                <input 
                                    className=" pa2 auto-fill input-reset bg-transparent fw6 f4 w-100" 
                                    type="text" 
                                    name="first-name" 
                                    id="first-name"
                                    required
                                    placeholder='First name'
                                    pattern='[A-Za-z]{2,}'
                                    value={signUpName}
                                    onChange={onInputChange}
                                />
                            </div>
                            <div style={{display: 'none'}} className='f5 red db fw7' id='name-format'>Name must contain 2 or more alphabetical characters only</div>
                            <div className="mt3">
                                <input 
                                    className=" pa2 auto-fill input-reset bg-transparent fw6 f4 w-100" 
                                    type="email" 
                                    name="email-address" 
                                    id="email-address"
                                    required
                                    placeholder='Email'
                                    pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
                                    value={signInEmail}
                                    onChange={onEmailChange}
                                />
                            </div>
                            <div style={{display: 'none'}} className='f5 red db fw7' id='email-format'>Enter a valid email address</div>
                            <div className="mv3">
                                <input 
                                    className=" pa2 input-reset bg-transparent fw f4 w-100" 
                                    type="password" 
                                    name="password" 
                                    id="password"
                                    required
                                    placeholder='Password'
                                    pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,14}'
                                    value={signInPassword}
                                    onChange={onPasswordChange}
                                />
                                <div title='Reveal/hide password' className="icon-div">
                                    <FontAwesomeIcon onClick={togglePassword1} className='pointer mr3 icon' icon={faEyeSlash} size="4x" />
                                </div>
                            </div>
                            
                            <div style={{display: 'none'}} className='f5 red db fw7' id='password-format'>Password must contain an upper-case letter, a lower-case letter, a number and must be between 6-14 characters long</div>
                            <div className="mt3 pt3">
                                <input 
                                    className=" pa2 input-reset bg-transparent fw5 f4 w-100" 
                                    type="password" 
                                    name="confirm-password" 
                                    id="confirm-password"
                                    required
                                    placeholder='Confirm password'
                                    value={confirmPassword}
                                    onChange={(e)=>{
                                        dispatch(setConfirmPassword(e.target.value))
                                        dispatch(setWrongDetails(null))
                                    }}
                                />
                                <div title='Reveal/hide password' className="icon-div">
                                    <FontAwesomeIcon onClick={togglePassword2} className='pointer mr3 icon' icon={faEyeSlash} size="4x" />
                                </div>
                            </div>
                        </fieldset>
                        <div className='f5 red pt2 db fw7'>
                            {wrongDetails}
                        </div>
                        {isPending ? <div className='tc'>
                            <span className='f4 black fw7 b'>Loading...</span>
                        </div> :
                        <div>
                            <button className="b  w-100 sign-in-btn mt3 input-reset ba b--light-green bg-black pointer f6 dib">Register</button>
                        </div>}
                        <div className="center pb3 lh-copy mt3">
                            <p className='f5 pt2'>Already registered?</p>
                            <Link to='/signin'><p className="f6 tc db pa2 sign-up-button">Sign in</p></Link>
                        </div>
                    </form> 
                </article>               
            </div>
        </div>
    );
}
 
export default SignUp;