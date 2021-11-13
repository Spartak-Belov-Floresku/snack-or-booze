import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem
} from "reactstrap";


/*
  component will create drink menu and displayed on the UI
*/
function DrinksMenu({ drinks }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Drink Menu
          </CardTitle>
          <ListGroup>
            {drinks.map(drink => (
              <Link to={`/drinks/${drink.id}`} key={drink.id}>
                <ListGroupItem>{drink.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
          <Link to="/"><ListGroupItem>Home page</ListGroupItem></Link>
        </CardBody>
      </Card>
    </section>
  );
}

export default DrinksMenu;