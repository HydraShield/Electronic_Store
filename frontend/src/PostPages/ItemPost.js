
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ItemPost = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState("");

    const submit = () => {
        console.log(name, price, quantity)
        try {
            // fetch("http://localhost:8080/item", {
            //     method: 'POST',
            //     body: { model: name, company: quantity, price: price},
            // }).then((res) => {
            //     if (res.status === 200) {
            //         alert("product has been added")
            //     }
            //     else {
            //         alert("Product addition fail")
            //     }
            // } )}
            // catch (error) {
            //     alert("Server Problem")
            //     console.log(error)
            // }

            axios.post("http://localhost:8080/item",
             { model: name, company: quantity, price: price})
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
                <label>Item Model Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="...name" /><br />
                <label>Item Price</label>
                <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="...price" /><br />
                <label>Item company</label>
                <input value={quantity} onChange={(e) => setQuantity(e.target.value)} type="text" placeholder="...company" /><br />
                <button className="add-btn" onClick={submit} type="submit">Submit</button><br />
            </div>
        </div>
    )
}