
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const StockPost = () => {
    const navigate = useNavigate();

    const [name, setName] = useState(0);
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [deliver, setDeliver] = useState(0);

    const submit = () => {
        console.log(name, price, quantity, deliver)
        try {
            axios.post("http://localhost:3030/seller/addProduct", { item_id: name, current: price, ordered: quantity, deliver: deliver})
                .then((res) => {
                    if (res.status === 200) {
                        alert("product has been added")
                    }
                    else {
                        alert("Product addition fail")
                    }
                })
        } catch (error) {
            alert("Server Problem")
            console.log(error)
        }
    }

    return (
        <div className="inv-container">
            <div className="add-form">
                <h1>Fill information about new Item</h1>
                <label>Item ID</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="number" placeholder="...id" /><br />
                <label>Current Stock</label>
                <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="...current" /><br />
                <label>Ordered</label>
                <input value={quantity} onChange={(e) => setQuantity(e.target.value)} type="number" placeholder="...ordered" /><br />
                <label>To Deliver</label>
                <input value={deliver} onChange={(e) => setDeliver(e.target.value)} type="number" placeholder="...deliver" /><br />
                <button className="add-btn" onClick={submit} type="submit">Submit</button><br />
            </div>
        </div>
    )
}