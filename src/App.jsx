
import  { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';



import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

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
     toast.success("Recepie successfully added!")
   
    }else{
      toast.error("Sory it was already added")
      
    }
    
  }


  const handlePrepare = (item)=>{
    console.log("clicked", item);
    
    const newCooking = [...cooking, item]
    setCooking(newCooking);
    const remainingCook = cooks.filter(cook => cook.recipe_id !== item.recipe_id);
    setCooks(remainingCook)

 
  }
  return (
    <div>
      <Header></Header>
    
      <Main  cooking={cooking}  handlePrepare={handlePrepare} cooks={cooks} handleWantCook={handleWantCook} recepies={recepies}></Main>
     
    <ToastContainer></ToastContainer>
      
    
    </div>
  );
};

export default App;
