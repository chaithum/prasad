import React, { useState, useEffect } from 'react';

const UpdateItem = ({ itemId }) => {
    const [item, setItem] = useState({ name: '', price: '', description:'' ,category:'', availability: '',imageURL:'',remove1:'' });
    const [loading, setLoading] = useState(true);
 
    useEffect(() => {
       
        const fetchItem = async () => {
            try {
                const response = await fetch(`/api/items/${itemId}`);
                const data = await response.json();
                setItem(data);
            } catch (error) {
                console.error('Error fetching item:', error);
            } finally {
                setLoading(false);
            }
        };
 
        fetchItem();
    }, [itemId]);
 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem((prev) => ({ ...prev, [name]: value }));
    };
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/items/${itemId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item),
            });
 
            if (response.ok) {
                const updatedItem = await response.json();
                console.log('Item updated:', updatedItem);
               
            } else {
                console.error('Failed to update item:', response.status);
            }
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };
 
    if (loading) return <p>Loading...</p>;
 
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>foodname:</label>
                <input type="text" name="foodname" value={item.foodname} onChange={handleChange} required />

            </div>
            <div>
                <label> category:</label>
                <input type="text" name="category" value={item.category} onChange={handleChange} required />
            </div>
            <div>
                <label>Price:</label>
                <input type="number" name="price" value={item.price} onChange={handleChange} required />
            </div>
            <div>
                <label>Description:</label>
                <textarea name="description" value={item.description} onChange={handleChange} required />
            </div>
            <div>
                <label>availability:</label>
                <input type="text" name="availability" value={item.availability} onChange={handleChange} required />
            </div>
            <div>
                <label>remove1:</label>
                <input type="text" name="remove1" value={item.remove1} onChange={handleChange} required />
            </div>
            <div>
                <label>imageURL:</label>
                <input type="text" name="imageURL" value={item.imageURL} onChange={handleChange} required />
            </div>
            <button type="submit">Update Item</button>
        </form>
    );
};
 
export default UpdateItem;

