import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import EditItem from '../EditItem';

/** render EditItem component */
test('renders learn react link', async () => {
    render(
        <MemoryRouter initialEntries={["edit/drinks/martini/" ]}>
            <Route path={"/edit/:name/:id"} component={EditItem} />
        </MemoryRouter>
    );
    
    jest.fn(() => Promise.resolve(screen.findByText("Martini")));
});


/** Matching snapshot of EditForm components*/ 
test('renders learn react link', async () => {
    
    const {asFragment} =  render(
        <MemoryRouter initialEntries={["edit/drinks/martini/"]}>
            <Route path={"/edit/:name/:id"} component={EditItem} />
        </MemoryRouter>
    );

    jest.fn(() => Promise.resolve(screen.findByText("Martini")));
    expect(asFragment()).toMatchSnapshot();  
});
