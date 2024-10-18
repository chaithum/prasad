


import { useState, useEffect} from "react";

const Additem = () => {
const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemDescription, setItemDescription] = useState('');
 
const handleAddItem = (e) => {
    e.preventDefault();
    const newItem = {
      name: itemName,
      price: parseFloat(itemPrice),
      description: itemDescription,
    };
 
    setItems((prevItems) => {
      const updatedItems = [...prevItems, newItem];
      localStorage.setItem('menuItems', JSON.stringify(updatedItems));
      return updatedItems;
    });
 
    setItemName('');
    setItemPrice('');
    setItemDescription('');
  };
 
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('menuItems'));
    if (storedItems) {
      setItems(storedItems);
    }
 
}, []);
  return (
    <div>
      <h2>Food Delivery Menu</h2>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={itemDescription}
          onChange={(e) => setItemDescription(e.target.value)}
        />
        <button type="submit">AddItem</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
<h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

 export default Additem;