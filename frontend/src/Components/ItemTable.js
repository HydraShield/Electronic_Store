import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom';
import "../BasicPages/Style.css"

const columns = [
    { field: 'id', headerName: 'SN', width: 50 },
    { field: 'item_id', headerName: 'Item ID', width: 70 },
    { field: 'model', headerName: 'Name', width: 200 },
    { field: 'company', headerName: 'Company', width: 100 },
    {
        field: 'price',
        headerName: 'Price',
        type: 'number',
        width: 100,
    },
];

export default function ItemTable({ rows }) {

    const navigate = useNavigate()

    const updateCell = ({row}) => {
        console.log(row)
        navigate(`/updateProduct`);
    }


    return (
        <div style={{
            height: "100%", width: "100%",
            paddingLeft: '0 8px',
            padding: '5 px',
            justifyContent: 'center',
            backgroundColor: '#FFA500',
        }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={4}
                rowsPerPageOptions={[5,10,15,20]}
                onCellClick={updateCell}
            />
        </div>
    );
}
