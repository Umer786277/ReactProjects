
import { useState } from "react";
import { useGlobalContext} from "../context";
const Search=()=>{

    const {setSearchterm,fetchRandomMeal}=useGlobalContext()

    const [text,setText]=useState('')

    const handlechange=(e)=>{

        setText(e.target.value)
        
    }

    const handlesubmit=(e)=>{
        e.preventDefault()
        if (text) {
            setSearchterm(text)
          
          }
    }

    const handleRandomMeal = () => {
        setSearchterm('')
        setText('')
        fetchRandomMeal()
      }

    return(

         <header className='search-container'>
        <form onSubmit={handlesubmit}>
          <input type='text' placeholder='type favorite meal' value={text} onChange={handlechange} className='form-input' />
          <button type="submit" className="btn">search</button>
          <button type="button" className="btn btn-hipster" onClick={handleRandomMeal}>suprise me !</button>
        </form>
      </header>
    )}

export default Search;