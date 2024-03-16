
import React, { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Recepie from './Components/Main/Recepie';


const App = () => {

  const [recepies, setRecepies] = useState([])
  useEffect(()=>{
    fetch('recepi.json')
    .then(res => res.json())
    .then(data =>setRecepies(data))
  }, [])
  return (
    <div>
      <Header></Header>
    
      <Main recepies={recepies}></Main>
     

      
    
    </div>
  );
};

export default App;
