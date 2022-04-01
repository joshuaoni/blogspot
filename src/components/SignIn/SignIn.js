import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faPencil } from '@fortawesome/free-solid-svg-icons';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setSignInEmail, setSignInPassword, setWrongDetails, setPendingState } from '../../Redux/Actions';


const SignIn = ({setUserData}) => {
    const dispatch = useDispatch();
    const {signInEmail, signInPassword, wrongDetails, isPending} = useSelector(state => {
        return {
            signInEmail: state.setSignInEmail.signInEmail,
            signInPassword: state.setSignInPassword.signInPassword,
            isPending: state.setPendingState.isPending,
            wrongDetails: state.setWrongDetails.wrongDetails
        }
    }, shallowEqual)

    const navigate = useNavigate();

    const password = document.getElementById('password')

    const togglePassword = () => {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type)

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setPendingState(true));

        const userDetails = {email: signInEmail, password: signInPassword}

        fetch('https://agile-beyond-78411.herokuapp.com/signin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userDetails)
        })
        .then(resp => resp.json())
        .then((data)=>{
            if (typeof data === 'object' && data !== null) {
                dispatch(setWrongDetails(null))
                dispatch(setPendingState(false))
                dispatch(setSignInPassword(''))
                dispatch(setSignInEmail(''))
                navigate('/')
                setUserData(data)
            } else if (data === 'Forgot username and/or password') {
                dispatch(setPendingState(false))
                dispatch(setWrongDetails('Username or password is incorrect'));
                dispatch(setSignInPassword(''))
            } else if (data === 'An error occured') {
                dispatch(setPendingState(false))
                dispatch(setWrongDetails('An error occured'));
            }
        })
    }

    return (
        <div>
            <div className='fullPage'>
                <article className='mv4 w-100 w-50-m w-25-l w-rr center pa3 bw2'>
                    <form 
                        className=""
                        onSubmit={handleSubmit}
                    >
                        <fieldset id="sign_up" className="b--transparent ph0 mh0">
                            <div className='pointer justify-center align-c'>
                                <FontAwesomeIcon className='' icon={faPencil} size="2x" /><div className='space'></div><h1 style={{display: 'inline'}} className='fw7 f2 ma0'> BloggingFun</h1>
                            </div>
                            <div className="mt3">
                                <input 
                                    className="pa2 input-reset bg-transparent fw6 f4 auto-fill w-100" 
                                    type="email" 
                                    name="email-address"  
                                    id="email-address"
                                    required
                                    placeholder='Email'
                                    value={signInEmail}
                                    onChange={(e)=>{
                                        dispatch(setSignInEmail(e.target.value))
                                        dispatch(setWrongDetails(null))
                                    }}
                                />
                            </div>
                            <div className="pt3">
                                <input 
                                    className="pa2  input-reset bg-transparent fw5 f4 w-100" 
                                    type="password" 
                                    name="password" 
                                    id="password"
                                    required
                                    placeholder='Password'
                                    value={signInPassword}
                                    onChange={(e)=>{
                                        dispatch(setSignInPassword(e.target.value))
                                        dispatch(setWrongDetails(null))
                                    }}
                                />
                                <div title='Reveal/hide password' className="icon-div">
                                    <FontAwesomeIcon onClick={togglePassword} className='pointer mr3 icon' icon={faEyeSlash} size="1-1" />
                                </div>
                            </div>
                        </fieldset>
                        <div className='f5 pt2 red db fw7'>
                            {wrongDetails}
                        </div>
                        {isPending ? <div className='tc'>
                            <span className='f4 black fw7 b'>Loading...</span>
                        </div> :
                        <div>
                            <button 
                                className="b  w-100 sign-in-btn mt3 input-reset ba bg-black pointer f6 dib"
                            >Sign in</button>
                        </div>}
                        <div className="lh-copy pb3 mt3">
                            <p className='f5 pt3'>Don't have an account?</p>
                            <Link to='/signup'><p className="f6 tc black db pa2 sign-up-button">Sign up</p></Link>
                        </div>
                    </form>
                </article>
            </div>
        </div>
        
    );
}

 
export default SignIn;