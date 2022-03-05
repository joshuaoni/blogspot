import React, {useState} from 'react';
import 'tachyons';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [gender, setGender] = useState('');
    const [goat, setGoat] = useState('');
    const [isPending, setIsPending] = useState(false);
    

    const handleSubmit = (event) => {
        event.preventDefault()  // stops he default action of the event object (the page refreshing when the form is submitted in this case)
        const newBlog = {title, body, author, gender, goat}

        setIsPending(true);

        setTimeout(() => {
            fetch('http://localhost:3003/blogs/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newBlog)
            }).then(()=>{
                setIsPending(false);
                navigate('/blogs');
            })
        }, 300);

        setAuthor('')
        setBody('')
        setGender('')
        setTitle('')
        setGoat('')
        const radio = document.querySelector('input[type=radio][name=goat]:checked');
        radio.checked = false;
        
    }

    const navigate = useNavigate();   
    // this hook lets you move back and forward through history (like clicking the forward & backward arrows), also to redirect the user
    // to go backward 1 step: navigate(-1)
    // to go forward 1 step: navigate(1)

    return (
        <div className='create center'>
            <br></br>
            <h1 id='heading'>Create your own blog!</h1>

            <form onSubmit={handleSubmit}>
                <label>Blog title :</label>
                    <input 
                        className='text' 
                        type='text' 
                        required
                        value={title}
                        onChange={(event)=>setTitle(event.target.value)}
                    />
                <label>Body of blog :</label>
                    <textarea
                        rows='10'
                        required
                        value={body}
                        onChange={(event)=>setBody(event.target.value)}
                    >
                    </textarea>
                <label>Blog author :</label>
                    <input 
                        className='text' 
                        type='text' 
                        required 
                        value={author}
                        onChange={(event)=>setAuthor(event.target.value)}
                    />
                <label>Gender</label>
                    <select
                        required
                        value={gender}
                        onChange={(event)=>setGender(event.target.value)}
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
                                setGoat(event.target.value)
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
                            onChange={(event)=>setGoat(event.target.value)}
                        />
                    </div>
                
                <br></br>

                {/* <div className='flex'>
                    <input className='center btn' type='submit' value='Submit'/>
                </div> */}
                <div className='flex'>
                    {isPending ? 
                    <h1 className='center'>Creating Blog...</h1> : 
                    <button className='center btn'>Submit</button>}
                </div>  {/* when this button is clicked within this form it triggers a submit event 'onSubmit' */}
           
            </form>
        </div>
    );
}
 
export default Create;