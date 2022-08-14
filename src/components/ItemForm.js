import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [name, setName] = useState("");
  const[category, setCategory] = useState("")
  function handleSubmit(e){
    e.preventDefault();
    let newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: e.target.name.value,
      category: e.target.category.value,
    };
    onItemFormSubmit(newItem);

  }
  function handleCategory(e){
    //console.log(e.target)
    setCategory(e.target.value)
  }
  function handleName(e){
    setName(e.target.value);
  }
  return (

    <form className="NewItem" onSubmit = {handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value = {name} onChange = {handleName}/>
      </label>

      <label>
        Category:
        <select name="category" value = {category} onChange = {handleCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
