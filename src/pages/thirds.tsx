import { Paper, Typography } from "@mui/material"
import { GridColumns, DataGrid } from "@mui/x-data-grid"
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Third, useThirds } from "../services/store"

const columns: GridColumns = [
  {
    field: "id",
    headerName: "Identificador",
    width: 200
  },
  {
    field: "nombre",
    headerName: "Nombre",
    width: 400
  }
];

const Thirds = () => {
  const thirds = useThirds()
  const navigate = useNavigate()

  return (
    <Fragment>
      <Typography variant="h4" mb={2} >Terceros</Typography>
      <Paper elevation={3}>
        <DataGrid 
          rows={thirds}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          autoHeight
          disableSelectionOnClick
          onRowDoubleClick={row => navigate(`${row.row.document_id}`)}
        />
      </Paper>
    </Fragment>
  );
}





export default Thirds
