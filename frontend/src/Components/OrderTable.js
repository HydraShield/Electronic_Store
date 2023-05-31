import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom';
import "../BasicPages/Style.css"

const columns = [
    {
        field: 'id',
        headerName: 'SN',
        type: 'number',
        width: 100,
    },
    {
        field: 'bill_id',
        headerName: 'Bill-ID',
        type: 'number',
        width: 100,
    },
    {
        field: 'item_id',
        headerName: 'Item-ID',
        type: 'number',
        width: 100,
    },
    {
        field: 'quantity',
        headerName: 'Quantity',
        type: 'number',
        width: 100,
    },
];

export default function OrderTable({ rows }) {


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
                pageSize={3}
                rowsPerPageOptions={[5,10,15,20]}
            />
        </div>
    );
}
