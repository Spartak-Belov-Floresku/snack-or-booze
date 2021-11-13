import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import SnackOrBoozeApi from "../Api";
import DrinksMenu from '../DrinksMenu';

let drinks;

/**befor ech tests get data from database */
beforeEach( async () => {

  function getDrinks(){
    return SnackOrBoozeApi.getDrinks();
  }    
  
  drinks = await getDrinks();

});


/** render DrinksMenu component */
test('renders learn react link', () => {

    render(
        <BrowserRouter>
            <DrinksMenu drinks={drinks} />
        </BrowserRouter>
    );
  
});

/** Matching snapshot of DrinksMenu components */
it("matches snapshot Home component", () => {  
      
    const {asFragment} = render(
        <BrowserRouter>
            <DrinksMenu drinks={drinks} />
        </BrowserRouter>
    );
    
    expect(asFragment()).toMatchSnapshot();
});

/** check if the menu exists on the DrinkMenu page */
it("menu on the home page", () => {

    const { queryByText } = render(
        <BrowserRouter>
            <DrinksMenu drinks={drinks}/>
        </BrowserRouter>
    );
    expect(queryByText("Drink Menu")).toBeInTheDocument();

});

/** checking if links to snack exists in DrinksMenu bar*/
it("check link", () => {

    const { getByText } = render(
        <BrowserRouter>
            <DrinksMenu drinks={drinks} />
        </BrowserRouter>
    );

    expect(screen.getByText('Gin and Tonic').closest('a')).toHaveAttribute('href', '/drinks/gin-and-tonic');

});
