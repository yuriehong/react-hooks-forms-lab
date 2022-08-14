import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("")
  function addItem(newItem){
    items = [...items, newItem];
    setItems(items);

  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  let itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
  
  function handleSearchChange(e) {
    setSearchText(e.target.value);
    console.log({searchText});
    
    console.log(itemsToDisplay)

  }
  //console.log(itemsToDisplay)
  itemsToDisplay = items.filter((item) => {    
    if(item.name.startsWith(searchText)){
      console.log(item.name)
      return item;
    }
    else{
      return;
    }

  })
  

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit = {addItem}/>
      <Filter onCategoryChange={handleCategoryChange} searchText = {searchText} onSearchChange = {handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
