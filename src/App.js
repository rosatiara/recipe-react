import React,{useEffect, useState} from 'react';
import "./App.css";
import Recipe from './Recipe';

const App = () => {
  const APP_ID = 'cccf4369'
  const APP_KEY = '6ff36973477f8a6c6b8c4a4b20f928a2'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  // search recipe only when the search button is clicked
  const [query, setQuery] = useState('chicken')

  useEffect( async ()=> {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch  = e => {
    e.preventDefault()
    setQuery(search)
    setSearch("")
  }
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe=>(
        <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        ingredients={recipe.recipe.ingredients}
        image={recipe.recipe.image}/>
      ))}
    </div>
  )
}

export default App