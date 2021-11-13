import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import FoodMenu from "./FoodMenu";
import DrinksMenu from "./DrinksMenu";
import Snack from "./FoodItem";
import Drink from "./DrinkItem";
import EditItem from "./EditItem";
import NotFound from "./404";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {

    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
    }

    async function getDrinks(){
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
    }    
    
    getSnacks();
    getDrinks();
    setIsLoading(false);

  }, []);


  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }


  return (
    <div className="App">
        <NavBar />
          <main>
            <Switch>
              <Route exact path="/">
                <Home snacks={snacks} drinks={drinks}/>
              </Route>
              <Route exact path="/snacks">
                <FoodMenu snacks={snacks} title="Snacks" />
              </Route>
              <Route path="/snacks/:id">
                <Snack />
              </Route>
              <Route exact path="/drinks">
                <DrinksMenu drinks={drinks} title="Drinks" />
              </Route>
              <Route path="/drinks/:id">
                <Drink />
              </Route>
              <Route path="/edit/:name/:id" >
                  <EditItem />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </main>
    </div>
  );
}

export default App;
