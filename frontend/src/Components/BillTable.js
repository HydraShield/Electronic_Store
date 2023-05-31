import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom';
import "../BasicPages/Style.css"

const columns = [
    { field: 'id', headerName: 'SN', width: 50 },
    { field: 'bill_id', headerName: 'Bill ID', width: 70 },
    { field: 'customer', headerName: 'Name', width: 200 },
    { field: 'mobile', headerName: 'Mobile', width: 200, type: 'number' },
    {
        field: 'amount',
        headerName: 'Amount',
        type: 'number',
        width: 150,
    },
    {
        field: 'date',
        headerName: 'Date',
        width: 100,
    }
];

export default function BillTable({ rows }) {


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
                pageSize={5}
                rowsPerPageOptions={[5,10,15,20]}
            />
        </div>
    );
}
