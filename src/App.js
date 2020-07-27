import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';

import './App.css';
import Help from './pages/help'
import Header from './layout/Header'
import Footer from './layout/Footer'
// import Recipe from './components/Recipe'
import RecipesGrid from './components/RecipesGrid'
import Alert from './components/Alert'


const App = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const APP_ID = "d1730525";
  const APP_KEY = "ccc569f29e21f895cee0efa7b6db115f"
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    setQuery("");
    if (query !== "") {
      // console.log(`Making GET request to ${url}`);
      setIsLoading(true);
      const result = await axios.get(url).catch(err => {
        setIsLoading(false);
        console.log(err);
      });
      setIsLoading(false);
      if (!result || !result.data.more) {
        return setAlert("No food with such name");
      }
      setRecipes(result.data.hits);
      // console.log(result.data.hits);

      setAlert("");
    }
    else {
      setAlert("Please fill the form");
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  }

  return (
    <Router>
      <div className="cover-container d-flex p-3 flex-column">

        <Header />
        {alert !== "" && <Alert alert={alert} />}


        <Route exact path="/" render={props => (
          <React.Fragment>
            <main role="main" className="inner cover">
              <form className="search-form" onSubmit={onSubmit}>
                <input type="search" className="search-bar form-control mx-auto" placeholder="Search for recipes..." autoComplete="off" onChange={onChange} value={query} />
                <button type="submit" className="btn btn-lg btn-success" value="search">Search</button>
              </form>
            </main>
          </React.Fragment>
        )} />


        {/* load recipe */}
        {/* <div className="recipes">
          {recipes !== [] && recipes.map(recipe =>
            <Recipe key={uuidv4()} recipe={recipe} />)}
        </div> */}
        <RecipesGrid isLoading={isLoading} recipes={recipes} />


        <Route path="/help" component={Help} />

        <Footer />
      </div>
    </Router>
  )
}


export default App;
