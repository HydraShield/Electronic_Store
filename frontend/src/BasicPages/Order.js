import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Style.css"
import OrderTable from "../Components/OrderTable";

export const Order = () => {
    const [items, setItems] = useState([
    ]);
    const  navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/orders")
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
            <div className="inventory-box">
                <OrderTable rows={items} />
            </div>
        </div>
    )

}