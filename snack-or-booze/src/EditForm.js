import { useState } from "react";
import { Redirect } from "react-router-dom";
import './EditForm.css';
import SnackOrBoozeApi from "./Api";
import useFields from './hooks/useFields';


/**
 * this component helps to update data for snack or drink into data base using HTML from
 */
const EditForm = ({itemRef, item}) => {

    const[ update, setUpdate ] = useState(false)

    const [formData, handleChange, releaseButton ] = useFields({
      id: item.id,
      name: item.name,
      description: item.description,
      recipe: item.recipe,
      serve: item.serve
    });
    

    const handleData = async (data) => {
      await SnackOrBoozeApi.updateData(itemRef, data);
      setUpdate(true);
    }

    const handleSubmit = e => {
        e.preventDefault();
        handleData(formData);
    }

    return update? (<Redirect to={`/${itemRef}/${formData.id}/`} />):(
                                                                      <form onSubmit={handleSubmit}>
                                                                        <label htmlFor="name">Name:</label>
                                                                          <input
                                                                            type="text"
                                                                            name="name"
                                                                            value={formData.name}
                                                                            onChange={handleChange}
                                                                            id="name"
                                                                          />
                                                                      <label htmlFor="description">Description:</label>
                                                                          <input
                                                                            type="text"
                                                                            name="description"
                                                                            value={formData.description}
                                                                            onChange={handleChange}
                                                                            id="description"
                                                                          />
                                                                      <label htmlFor="recipe">Recipe:</label>
                                                                          <input
                                                                            type="text"
                                                                            name="recipe"
                                                                            value={formData.recipe}
                                                                            onChange={handleChange}
                                                                            id="recipe"
                                                                          />
                                                                      <label htmlFor="serve">Serve:</label>
                                                                          <input
                                                                            type="text"
                                                                            name="serve"
                                                                            value={formData.serve}
                                                                            onChange={handleChange}
                                                                            id="serve"
                                                                          />
                                                                        {!releaseButton()? <button disabled>Edit {itemRef}</button>: <button>Edit {itemRef}</button>}
                                                                      </form>
                                                                    );
}


export default EditForm;