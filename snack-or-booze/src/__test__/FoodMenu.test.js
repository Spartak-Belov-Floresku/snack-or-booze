import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import SnackOrBoozeApi from "../Api";
import FoodMenu from '../FoodMenu';

let snacks;

/**befor ech tests get data from database */
beforeEach( async () => {
  function getSnacks() {
    return SnackOrBoozeApi.getSnacks();
  }   
  
  snacks = await getSnacks();

});


/** render FoodMenu component */
test('renders learn react link', () => {

    render(
        <BrowserRouter>
            <FoodMenu snacks={snacks} />
        </BrowserRouter>
    );
  
});

/** Matching snapshot of FoodMenu components */
it("matches snapshot Home component", () => {  
      
    const {asFragment} = render(
        <BrowserRouter>
            <FoodMenu snacks={snacks} />
        </BrowserRouter>
    );
    
    expect(asFragment()).toMatchSnapshot();
});

/** check if the menu exists on theFoodMenu page */
it("menu on the home page",  () => {

    const { queryByText } = render(
        <BrowserRouter>
            <FoodMenu snacks={snacks}/>
        </BrowserRouter>
    );
    expect(queryByText("Food Menu")).toBeInTheDocument();

});

/** checking if links to snack exists in FoodMenu bar*/
it("check link", () => {

    const { getByText } = render(
        <BrowserRouter>
            <FoodMenu snacks={snacks} />
        </BrowserRouter>
    );

    expect(screen.getByText('Nachos').closest('a')).toHaveAttribute('href', '/snacks/nachos');

});
