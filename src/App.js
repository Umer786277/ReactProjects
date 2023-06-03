
import React from 'react';
import Meals from './components/meals';
import Faveourite from './components/faveourites';
import Search from './components/search';
import Modal from './components/modal';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useGlobalContext } from './context';
function App() {
  const {showModal,favorites}=useGlobalContext()
  return (

    <main>
       <Search />
       { favorites.length>0 && <Faveourite/>}  
      <Meals/>
      {showModal && <Modal />} 
     
    
   
    

    </main>

    
   
  );
}

export default App;
