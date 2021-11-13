import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Home from '../Home';
import SnackOrBoozeApi from "../Api";

let snacks, drinks;

/**befor ech tests get data from database */
beforeEach( async () => {
  function getSnacks() {
    return SnackOrBoozeApi.getSnacks();
  }

  function getDrinks(){
    return SnackOrBoozeApi.getDrinks();
  }    
  
  snacks = await getSnacks();
  drinks = await getDrinks();

});


/** render Home component */
test('renders learn react link', () => {

    render(
        <BrowserRouter>
            <Home snacks={snacks} drinks={drinks} />
        </BrowserRouter>
    );
  
});

/** Matching snapshot of Home components */
it("matches snapshot Home component", () => {  
      
    const {asFragment} = render(
        <BrowserRouter>
            <Home snacks={snacks} drinks={drinks} />
        </BrowserRouter>
    );
    
    expect(asFragment()).toMatchSnapshot();
});


/** check if the menu exists on the home page */
it("menu on the home page", () => {

    const { queryByText } = render(
        <BrowserRouter>
            <Home snacks={snacks} drinks={drinks} />
        </BrowserRouter>
    );
    expect(queryByText("Food Menu:")).toBeInTheDocument();
    expect(queryByText("Drinks Menu:")).toBeInTheDocument();

});

/** checking if links to snack and drink exist inmenu bar */
it("check link", () => {

    const { getByText } = render(
        <BrowserRouter>
            <Home snacks={snacks} drinks={drinks} />
        </BrowserRouter>
    );

    expect(screen.getByText('Nachos').closest('a')).toHaveAttribute('href', '/snacks/nachos');
    expect(screen.getByText('Gin and Tonic').closest('a')).toHaveAttribute('href', '/drinks/gin-and-tonic');


});