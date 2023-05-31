import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Style.css"
import ItemTable from "../Components/ItemTable";
import ItemStock from "../Components/Stocktable";
import BillTable from "../Components/BillTable";

export const Bill = () => {
    const [items, setItems] = useState([
    ]);
    const  navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/bills")
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
                <h2>Press here to add new Bill</h2>
                <button className="inv-add-btn" onClick={() => {navigate("/addBill")}}>Add Bill</button>
            </div>
            <div className="inventory-box">
                <BillTable rows={items} />
            </div>
        </div>
    )

}