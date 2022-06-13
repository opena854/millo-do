import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Fab, Paper, Typography } from "@mui/material"
import { DataGrid, GridColumns } from "@mui/x-data-grid"
import { Add } from "@mui/icons-material";
import { useCollection } from "../../services/store"
import { getMinWidth, TIPO_DOCUMENTO } from "../../model";

const documentoColumnas: GridColumns = [
  {
    field: "tipo_documento",
    headerName: "Tipo de Documento",
    minWidth: getMinWidth('sm'),
    valueGetter: params => TIPO_DOCUMENTO.find(opt => opt.value === params.value )?.label || "N/D"
  },
  {
    field: "documento",
    headerName: "Documento",
    minWidth: getMinWidth('sm')
  },
  {
    field: "nombre",
    headerName: "Nombre",
    minWidth: getMinWidth('md')
  },
]

const Documentos = () => {
  const [documentos, loading] = useCollection("documentos")
  const navigate = useNavigate()

  return (
    <Fragment>
      <Typography variant="h4" mb={2} >Entidades</Typography>
      <Paper elevation={3}>
        <DataGrid 
          loading={loading}
          rows={documentos}
          columns={documentoColumnas}
          pageSize={5}
          rowsPerPageOptions={[5]}
          autoHeight
          disableSelectionOnClick
          onRowDoubleClick={row => navigate(`${row.row.id}`)}
        />
      </Paper>
      <Box sx={{ '& > :not(style)': { m: 1 } }}><Fab color="primary" aria-label="add" onClick={() => navigate("new")}><Add /></Fab></Box>
    </Fragment>
  );
}

export default Documentos
