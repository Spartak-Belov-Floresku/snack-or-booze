import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SnackOrBoozeApi from "./Api";
import EditForm from "./EditForm";

/**
 * component will get dat from databasefor drink or snack and pass them to the EditForm componet
 */
const EditItem = () => {

    const { name, id } = useParams();
    const [item, setItem ] = useState({});
    
    useEffect(() => {

        async function getItem(){
            if(name === "snacks"){

                const snack = await SnackOrBoozeApi.getSnack(id);
                setItem(snack);

            }else if(name === "drinks"){

                const drink = await SnackOrBoozeApi.getDrink(id);
                setItem(drink);

            }    
        }
        getItem();

    }, []);

    return !item.id?<p>Loading &hellip;</p>:(<EditForm itemRef={name} item={item} />);
}

export default EditItem;