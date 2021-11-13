import { useState, useEffect } from "react";
import { Redirect, useParams, Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import SnackOrBoozeApi from "./Api";


/**
 * This component upload snack data on the UI
 */
function FoodItem() {

  const { id } = useParams();
  const [ snack, setSnack ] = useState({});

  useEffect(() => {

    const getSnack = async () => {
      try{
        const snack = await SnackOrBoozeApi.getSnack(id);
        setSnack(snack)
      }catch(err){
        setSnack(false);
      }
    }
    
    getSnack();
    
  },[]);

  if(!snack){
    return(<Redirect to={`/snacks`}/>)
  }
  
  return !snack.id?<p>Loading &hellip;</p>:(<section>
                                                <Card>
                                                  <CardBody>
                                                    <CardTitle className="font-weight-bold text-center">
                                                      {snack.name}
                                                    </CardTitle>
                                                    <CardText className="font-italic">{snack.description}</CardText>
                                                    <p>
                                                      <b>Recipe:</b> {snack.recipe}
                                                    </p>
                                                    <p>
                                                      <b>Serve:</b> {snack.serve}
                                                    </p>
                                                    <p>
                                                      <Link to={`/edit/snacks/${snack.id}`}>Edit snack</Link>
                                                    </p>
                                                    <p>
                                                      <Link to="/snacks">Snaks menu</Link>
                                                    </p>
                                                  </CardBody>
                                                </Card>
                                              </section>);
}

export default FoodItem;
