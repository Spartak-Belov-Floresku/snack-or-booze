import { useState, useEffect } from "react";
import { Redirect, useParams, Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import SnackOrBoozeApi from "./Api";

/**
 * This component upload drink data on the UI
 */
function DrinkItem() {
  const { id } = useParams();
  const [ drink, setDrink ] = useState({});

  useEffect(() => {

    const getDrink = async () => {
      try{
        const drink = await SnackOrBoozeApi.getDrink(id);
        setDrink(drink)
      }catch{
        setDrink(false);
      }
    }

    getDrink();

  },[]);

  if(!drink){
    return(<Redirect to={`/drinks`}/>)
  }
  
  return !drink.id? <p>Loading &hellip;</p>: (<section>
                                              <Card>
                                                <CardBody>
                                                  <CardTitle className="font-weight-bold text-center">
                                                    {drink.name}
                                                  </CardTitle>
                                                  <CardText className="font-italic">{drink.description}</CardText>
                                                  <p>
                                                    <b>Recipe:</b> {drink.recipe}
                                                  </p>
                                                  <p>
                                                    <b>Serve:</b> {drink.serve}
                                                  </p>
                                                  <p>
                                                    <Link to={`/edit/drinks/${drink.id}`}>Edit drink</Link>
                                                  </p>
                                                  <p>
                                                    <Link to="/drinks">Drinks menu</Link>
                                                  </p>
                                                </CardBody>
                                              </Card>
                                            </section>
                                          );

}

export default DrinkItem;