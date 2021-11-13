import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import FoodItem from '../FoodItem';

/** render FoodItem component */
test('renders learn react link', async () => {
    render(
        <MemoryRouter initialEntries={["/snacks/nachos/" ]}>
            <Route path={"/snacks/:id"} component={FoodItem} />
        </MemoryRouter>
    );
    
    await screen.findByText("An American classic!")
});

/** Matching snapshot of FoodItem components */
test('renders learn react link', async () => {
    
    const {asFragment} =  render(
        <MemoryRouter initialEntries={["/snacks/nachos"]}>
            <Route path={"/snacks/:id"} component={FoodItem} />
        </MemoryRouter>
    );

    await screen.findByText("An American classic!")
    expect(asFragment()).toMatchSnapshot();
});