import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './components/Home/Home';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import WriteUp from './components/WriteUp/WriteUp';
import Create from './components/Create/Create';
import NotFound from './components/NotFound/NotFound';
import SignIn from './components/SignIn/SignIn.js';
import SignUp from './components/SignUp/SignUp.js';
import Contact from './components/Contact/Contact.js';
import Bottom from './components/Bottom/Bottom';
import Navigation from './components/Navigation/Navigation';


function App() {const [user, setUser] = useState({
    name: '',
    email: ''
  })

  useEffect(()=>{
    const data = localStorage.getItem('user-state');
    if (data) {
      let a = JSON.parse(data)
      setUser(a.user)
    }
  }, [])

  const obj = {user}
  useEffect(()=>{
    localStorage.setItem('user-state', JSON.stringify(obj))
  })

  const setUserData = (data) => {
    setUser({
      name: data.name, 
      email: data.email,
    })
  }

  const reset = () => {
    setUser({
      name: '', 
      email: '',
    })
  }

  return (
    <>
      <BrowserRouter>
        
        <div className="">
          <Routes>
            <Route path='/' element={
              <div>
                <Navigation 
                  reset={reset} 
                  user={user}
                />
                <Home 
                  user={user}
                />
                <Bottom />
              </div> 
            } />
            <Route path='/signin' element={
              <SignIn 
                setUserData={setUserData}
              />
            } />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/blogs' element={
              <>
                <Navigation
                  reset={reset} 
                  user={user} 
                />
                <Blogs
                  title='Blogs :'
                  user={user}
                />
                <Bottom />
              </>
            } />
            <Route path='/blogs/create' element={
              <>
                <Navigation
                  reset={reset} 
                  user={user} 
                />
                <Create
                  user={user} 
                />
                <Bottom />
              </>
            } />
            <Route path='/blogs/:id' element={
              <>
                <Navigation
                  reset={reset} 
                  user={user} 
                />
                <WriteUp
                  user={user} 
                />
                <Bottom />
              </>
            } />
            <Route path='/about' element={
              <div>
                <Navigation 
                  reset={reset} 
                  user={user}
                />
                <About />
                <Contact />
                <Bottom />
              </div>
            } />
            <Route path='*' element={
              <>
                <Navigation
                  reset={reset} 
                  user={user} 
                />
                <NotFound />
              </>
            } /> {/* this asterisk means it's for any other route added to the end-point that's not listed. This Route should be at the bottom otherwise it will match the other routes below it. */}
          </Routes>
        </div>
        
      </BrowserRouter>
      
    </>
  );
}

export default App;
