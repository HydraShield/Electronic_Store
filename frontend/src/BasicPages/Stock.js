import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Style.css"
import ItemTable from "../Components/ItemTable";
import ItemStock from "../Components/Stocktable";

export const Stock = () => {
    const [items, setItems] = useState([
    ]);
    const  navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/stocks")
            .then((res) => {
                var data = res.data
                console.log(data)
                for(let i=0;i<data.length;i++){
                    data[i] = {id:i, ...data[i]}
                }
                setItems(data)
            })
    }, []);

    return (
        <div>
            <div className="inv-add">
                <h2>Press here to add new Stock</h2>
                <button className="inv-add-btn" onClick={() => {navigate("/addStock")}}>Add Item</button>
            </div>
            <div className="inventory-box">
                <ItemStock rows={items} />
            </div>
        </div>
    )

}