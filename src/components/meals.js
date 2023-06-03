import React from "react";
import {useContext} from 'react'
import {useGlobalContext} from '../context'

import {BsHandThumbsUp} from 'react-icons/bs'



const Meals=()=>{
    const {loading,meals,selectMeal,addToFavorites}=useGlobalContext()
    
    if (meals.length < 1) {
      return <section className="section">
        <h4>No meals matched your search term. Please try again.</h4>
      </section>
    }

    if (loading) {
      return <section className="section">
        <h4>Loading...</h4>
      </section>
    }
  

    return <section className="section-center">
    {meals.map((singleMeal) => {
      const { idMeal, strMeal: title, strMealThumb: image } = singleMeal
      return <article key={idMeal} className="single-meal" >
        {/* We are going to using an arrow function bevause wiyhout it will reload all the array and by using it will be call back only the the user clicks on the image */}
        <img src={image}  className="img" onClick={()=> selectMeal(idMeal)}/>
        <footer>
          <h5>{title}</h5>  
          <button className='like-btn' onClick={()=>addToFavorites(idMeal)}><BsHandThumbsUp/></button>
        </footer>
      </article>
    })}
  </section>
}                                       

export default Meals;