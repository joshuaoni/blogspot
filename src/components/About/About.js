import React from 'react';
import 'tachyons';
import races from '../../images/3people.png';
import lappy from '../../images/lappy.png';
import mw from '../../images/man-woman.png';


const About = () => {
    return (
        <div className=''>
            <div className='App center'>
                <h1 id='heading' className='mt0 pt4'>About this web app :</h1>
                <h1>This site was created to give users a platform to express themselves, or share their write-ups
                with the world, no matter what topic they are based on. You just have to create an account 
                first, or log in if you aoready have one. Navigate to the blogs page by clicking 'Blogs' 
                on the navigation bar above, and then scroll to the bottom to create your very first blog!
                </h1>
                <div className=''>
                    <div className='pb3'><img alt='' style={{paddingLeft: '25%', paddingRight: '25%'}} width='50%' height='auto' src={races} /></div>
                    <div className='flex'>
                        <div className='flex' style={{alignItems: 'center', width: '42%', paddingLeft: '3%'}}><img alt='img' src={lappy} /></div>
                        <div style={{width: '55%'}}><img alt='img' src={mw} /></div>
                    </div>
                </div>
                <h1 className='ma0'>All you need is your laptop or your mobile phone. What are you waiting 
                for? Start creating blogs and share your work with your friends :) <br/><br />You can contact the developer of 
                this web app below.</h1>
            </div>
        </div>
    );
}
 
export default About;