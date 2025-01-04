import { useState, useEffect } from 'react';
import './App.css'
import SearchBar from "./components/SearchBar"
import RecipeCard from "./components/RecipeCard"

const apiUrl ="https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {

  const[isLoading, setisLoading]=useState(false);
  const [query, setQuery]=useState("");
  const[recipes, setRecipes]=useState([]);

//fetching data from the API

const searchRecipes = async() => {

  setisLoading(true);
  const url =apiUrl + query;
  const res =await fetch(url);
  const data =await res.json();
  //console.log(data);
  setRecipes(data.meals);
  setisLoading(false);


};

useEffect(()=> {

  searchRecipes()

}, []);
  return (
    
      <div className='container'>
        <h2>DELIGHT RECIPES</h2>
        <div className="recipes">

          {recipes? recipes.map(recipe => (
            <RecipeCard 
            key={recipe.idMeal}
            recipe={recipe}
            />

          )): "Oops Recipes not found!"};

        </div>
        </div>
    
  );
}

export default App;
