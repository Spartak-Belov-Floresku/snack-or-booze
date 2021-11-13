import { Link } from "react-router-dom";
import { 
  Card, 
  CardBody, 
  CardTitle, 
  CardColumns,
  CardText,
  ListGroup,
  ListGroupItem
 } from "reactstrap";


/**
 * component will upload data available drinks and snacks on the home page of the UI
 */
function Home({snacks, drinks}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <span className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </span>
          </CardTitle>
        </CardBody>
        <CardBody>
          <CardColumns className="float-left">
            <CardText className="menu-title">Food Menu:</CardText>
            <ListGroup className="home-page-menu">
              {snacks.map(snack => (
                <Link to={`/snacks/${snack.id}`} key={snack.id}>
                  <ListGroupItem>{snack.name}</ListGroupItem>
                </Link>
              ))}
            </ListGroup>
          </CardColumns>
          <CardColumns className="float-right">
            <CardText className="menu-title">Drinks Menu:</CardText>
            <ListGroup className="home-page-menu">
              {drinks.map(drink => (
                <Link to={`/drinks/${drink.id}`} key={drink.id}>
                  <ListGroupItem>{drink.name}</ListGroupItem>
                </Link>
              ))}
            </ListGroup>
          </CardColumns>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
