import { useEffect, useState } from "react";
import Recipe from "./components/recipe/recipe"
import TitleSection from "./components/title-section/title-section";
import Footer from "./components/footer/footer";
import './App.css';
import axios from 'axios';

const App = () => {

  // config variables for Edamam API
  // use env variables for sensitive data
  const APP_ID = "09058df9";
  const APP_KEY = "b99fdd3896fe45e8a4ab2b814e012d5c";

  // STATES
  const [recipes, setRecipes] = useState([]); // stores an array of recipes from data.results
  const [search, setSearch] = useState(""); // stores the user input from the search bar
  const [query, setQuery] = useState("noodles"); // stores the query string that goes the API query

  // EFFECTS
  useEffect(() => {
    getRecipes();
  }, [query]); // runs on page load and every time query is updated

  // requests recipes from API using query string 
  const getRecipes = async () => { // use api data to get label, ingredients (array), image, calories
    const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.data;
    setRecipes(data.hits);
  }

  // updates search state on change
  const updateSearch = e => { // e.target.value is the value of the input field
    setSearch(e.target.value);
  }

  // updates query on form submit to get API results
  const getSearch = e => {
    e.preventDefault(); // prevents the page from refreshing on submit
    setQuery(search);
    setSearch(""); // resets search state to empty string
  }

  return (
    <div className="App">
      <TitleSection />
      <form onSubmit={getSearch} className="search-form container">
        <input className="search-bar" type="text" placeholder="Enter any dish (ex. Noodles)" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes container">
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
