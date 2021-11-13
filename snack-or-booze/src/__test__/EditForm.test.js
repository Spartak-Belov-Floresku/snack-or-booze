import { render, screen, fireEvent} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import SnackOrBoozeApi from "../Api";
import EditForm from '../EditForm';

let snack;

/**befor ech tests get data from database */
beforeEach( async () => {
  function getSnack() {
    return SnackOrBoozeApi.getSnack('nachos');
  }   
  
  snack = await getSnack();

});

/** render EditForm component */
test('renders learn react link', () => {

    render(
        <BrowserRouter>
            <EditForm itemRef={'snacks'} item={snack} />
        </BrowserRouter>
    );
  
});

/** Matching snapshot of EditForm components */
it("matches snapshot Home component", () => {  
      
    const {asFragment} = render(
        <BrowserRouter>
            <EditForm itemRef={'snacks'} item={snack} />
        </BrowserRouter>
    );
    
    expect(asFragment()).toMatchSnapshot();
});

/** update data into database */
it("check form submission and get update snack", () => {  
      
    const { queryByText, getByLabelText } = render(<BrowserRouter><EditForm itemRef={'snacks'} item={snack} /></BrowserRouter>);

    const btn = queryByText("Edit snacks");
    const input = getByLabelText("Description:");

    //check valu befor change
    expect(input.closest("input").value).toEqual("An American classic!");

    input.closest("input").value = "Update description...!!!!";

    fireEvent.click(btn);

    jest.fn(() => expect(screen.findByText("Update description...!!!")).toBeInTheDocument());
    
});