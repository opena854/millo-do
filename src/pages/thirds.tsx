import { Box, Fab, Paper, Typography } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useCollection } from "../services/store"
import { ThirdModel } from "../model/third";
import { Add } from "@mui/icons-material";
import { getGridColumns } from "../model";

const Thirds = () => {
  const [thirds, loading] = useCollection(ThirdModel.dbPath)
  const navigate = useNavigate()

  return (
    <Fragment>
      <Typography variant="h4" mb={2} >Terceros</Typography>
      <Paper elevation={3}>
        <DataGrid 
          loading={loading}
          rows={thirds}
          columns={getGridColumns(ThirdModel.fields)}
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





export default Thirds
