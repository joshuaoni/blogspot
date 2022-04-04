import React from 'react';
import 'tachyons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import black from '../../images/black.JPG';
import white from '../../images/white.PNG';
import jean from '../../images/jean-girl.png';
import './Home.css';

const Home = ({user}) => {
    return (
        <div className=''>
            <div className='App center pb5'>
                <div className='justify-center align-c pt4'>
                    <FontAwesomeIcon className='' icon={faPencil} size="3x" /><div className='space'></div><h1 id='heading' style={{display: 'inline'}} className='ma0'> BloggingFun</h1>
                </div>
                <br></br>
                <div className='w-100 mb4 mt4'><img alt='' width='100%' height='auto' className='' src={jean}/></div>
                <h1>The need for self-expression is an important part of our lives. When we don't 
                express ourselves, we repress important parts of who we are and cause ourselves 
                considerable struggle and lasting mental and emotional pain. Our frustration turns to 
                rage. Our isolation turns to depression. Our restlessness turns to panic. Finding 
                creative, healthy, productive ways to express ourselves, such as songwriting, poetry, 
                visual arts, gardening, cooking, and even speaking out loud in support group meetings, 
                can be the remedy to our painful, destructive patterns. Sobriety and recovery are 
                wonderful roads to creative expression.</h1>
                <br></br>
                <h1>Spoken word, poetry, prose, and creative writing are all ways to express yourself 
                and what you’re experiencing. Writing down and performing your thoughts can serve to 
                transform the intangibility of your emotions and experiences into something more.</h1>
                <div className='flex justify-center'><div className='w-50'><img alt='' src={white}/></div><div className='w-50'><img alt='' src={black}/></div></div>
                <h1 className='ma0'>Here at BloggingFun, we offer you a creative platform for 
                you to express yourself, or express your opinions on any topic you choose to by 
                penning down your thoughts in a blog post. You might want to share your personal take on an 
                ongoing societal issue, or an educational or tech related write-up. It could even be poetry!
                We offer you complete creative freedom. Note that you can delete any of your blog posts whenever you feel like doing so. You can also read up other users' blogs and get inspired by their work. 
                Can't wait to get started? Use the navigation bar at the top to navigate to the blogs section!</h1>
            </div>
        </div>
    );
}
 
export default Home;