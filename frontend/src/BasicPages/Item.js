import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Style.css"
import ItemTable from "../Components/ItemTable";

export const Item = () => {
    const [items, setItems] = useState([]);
    const  navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/items")
            .then((res) => {
                var data = res.data
                console.log(data)
                for(let i=0;i<data.length;i++){
                    data[i] = {id:i, ...data[i]}
                }
                setItems(data)
            })
    }, []);

    const deleteItem = () => {
        try{
        axios.delete("http://localhost:8080/items",)
                .then((res) => {
                    if (res.status === 200) {
                        alert("products has been deleted")
                    }
                    else {
                        alert("Product deletion fail")
                    }
                })
            }catch (error) {
            alert("Server Problem")
            console.log(error)
        }
    }

    return (
        <div>
            <div className="inv-add">
                <h2>Press here to add new Item</h2>
                <button className="inv-add-btn" onClick={() => {navigate("/addItem")}}>Add Item</button>
                <h2>Press here to add Delete All Item</h2>
                <button className="inv-add-btn" onClick={() => {navigate("/addItem")}}>Delete</button>
            </div>
            
            <div className="inventory-box">
                <ItemTable rows={items} />
            </div>
        </div>
    )

}