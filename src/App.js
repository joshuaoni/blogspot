import React from 'react';
import './App.css';
import Home from './Home';
import {Routes, Route, BrowserRouter, Link} from 'react-router-dom'
import Blogs from './Blogs';
import About from './About';
import WriteUp from './WriteUp';
import Create from './Create';
import NotFound from './NotFound';


function App() {
  return (
    <>
      <BrowserRouter>
        <nav className='nav'>
          <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/about'>About</Link>
          </div>
        </nav>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blogs' element={<Blogs title='Blogs :'/>} />
            {/* props can be a dynamic value within {} or a string like 
            'title' as is the case above, etc. */}
            <Route path='/blogs/create' element={<Create />} />
            <Route path='/blogs/:id' element={<WriteUp />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} /> {/* this asterisk means it's for any other route added to the end-point that's not listed. This Route should be at the bottom otherwise it will match the other routes below it. */}
          </Routes>
        </div>
        
        
      </BrowserRouter>
      
    </>
  );
}

export default App;
