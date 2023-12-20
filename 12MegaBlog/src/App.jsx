import { useState } from 'react';
import conf from './conf/conf';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  console.log( conf.appwriteUrl );

  return (
    <>
     <h1>Welcome to the MegaBlog</h1>
    </>
  )
}

export default App
