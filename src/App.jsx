
import React, { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Recepie from './Components/Main/Recepie';


const App = () => {

  const [recepies, setRecepies] = useState([]);

  const [cooks, setCooks] = useState([]);
  useEffect(()=>{
    fetch('recepi.json')
    .then(res => res.json())
    .then(data =>setRecepies(data))
  }, [])


  const handleWantCook = recepie => {
    // console.log("clicked", recepie);


    const isAdded = cooks.find(rec => rec.recipe_id == recepie.recipe_id);
    if(!isAdded){
      const newCook = [...cooks, recepie]
      setCooks(newCook)
   
    }else{
      alert("Item is already added");
      return;
  
    }
    
  }
  return (
    <div>
      <Header></Header>
    
      <Main cooks={cooks} handleWantCook={handleWantCook} recepies={recepies}></Main>
     

      
    
    </div>
  );
};

export default App;
