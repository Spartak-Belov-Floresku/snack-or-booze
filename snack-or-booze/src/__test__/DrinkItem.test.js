import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import DrinkItem from '../DrinkItem';

/** render DrinkItem component */
test('renders learn react link', async () => {
    render(
        <MemoryRouter initialEntries={["/drinks/martini/" ]}>
            <Route path={"/drinks/:id"} component={DrinkItem} />
        </MemoryRouter>
    );
    
    await screen.findByText("Martini")
});

/** Matching snapshot of DrinkItem components */
test('renders learn react link', async () => {
    
    const {asFragment} =  render(
        <MemoryRouter initialEntries={["/drinks/martini"]}>
            <Route path={"/drinks/:id"} component={DrinkItem} />
        </MemoryRouter>
    );

    await screen.findByText("Martini")
    expect(asFragment()).toMatchSnapshot(); 
    
});