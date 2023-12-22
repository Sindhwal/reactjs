import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import authService from './appwrite/auth';
import {login,logout} from "./store/authSlice";
import {Header,Footer} from './components';

import store from './store/store';
import conf from './conf/conf';
import './App.css'
import { combineSlices } from '@reduxjs/toolkit';

function App() {
  
  const [loading, setLoading] = useState( true );
  const dispatch = useDispatch();

  useEffect( ()=> {

    authService.getCurrentUser().then( (userData )=>{
      if( userData ){
        dispatch( login({ userData } ) );
        console.log( 'Login sucessfully!');
      } else {
        dispatch( logout() );
        console.log( 'No user is logged in' );
      }
    }).finally(
      ()=> setLoading( false )
    )

  }, []);



  return !loading ?(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
     <div className='w-full block'>
      <Header/>
      <main>
        { /* outlet */}
        <h1>Welcome to the MegaBlog</h1>
      </main>
      <Footer/>        
     </div>
    </div>
  ) : null;
}

export default App
