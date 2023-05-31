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
        field: 'item_id',
        headerName: 'Item ID',
        type: 'number',
        width: 100,
    },
    {
        field: 'current',
        headerName: 'Current',
        type: 'number',
        width: 100,
    },
    {
        field: 'ordered',
        headerName: 'Ordered',
        type: 'number',
        width: 100,
    },
    {
        field: 'deliver',
        headerName: 'Deliver',
        type: 'number',
        width: 100,
    },
];

export default function ItemStock({ rows }) {

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
