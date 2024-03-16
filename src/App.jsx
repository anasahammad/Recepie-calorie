
import React, { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Recepie from './Components/Main/Recepie';


const App = () => {

  const [recepies, setRecepies] = useState([]);

  const [cooks, setCooks] = useState([]);

  const [cooking, setCooking] = useState([])

 
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


  const handlePrepare = (item)=>{
    console.log("clicked", item);
    
    const newCooking = [...cooking, item]
    setCooking(newCooking);

 
  }
  return (
    <div>
      <Header></Header>
    
      <Main  cooking={cooking}  handlePrepare={handlePrepare} cooks={cooks} handleWantCook={handleWantCook} recepies={recepies}></Main>
     

      
    
    </div>
  );
};

export default App;
