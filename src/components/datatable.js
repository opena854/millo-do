import { DataGrid } from '@material-ui/data-grid';
import React from 'react';

const DataTable = ({rows, columns, ...props }) => {
    return <DataGrid rows={rows} columns={columns} {...props} />
}

export default DataTable;
