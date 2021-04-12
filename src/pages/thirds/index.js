import React from "react";
import { Container, Box, Grid, Typography } from "@material-ui/core";
import { useCollection } from "../../services/firestore";
import DataTable from "../../components/datatable";
import ButtonGoTo from "../../components/buttongoto";

const columns = [{ field: "nombre", headerName: "Nombre", width: 200 }];

const Thirds = ({history}) => {
  const { result } = useCollection({
    path: ["empresas", "doblek", "terceros"],
  });

  return (
    <Container maxWidth="lg">
      <Box height="70vh">
        <Typography variant="h4" color="textPrimary">
          Terceros
        </Typography>

        {result ? (
          <DataTable
            columns={columns}
            rows={result}
            checkboxSelection={false}
            onRowDoubleClick={ ({ row }) => history.push("thirds/edit", { third: { _id: row._id } }) }
            getRowId={(row) => row._id}
          />
        ) : (
          <Typography variant="body1">{"loading..."}</Typography>
        )}
        <Box my={3}>
          <Grid item>
            <ButtonGoTo
              toUrl={"thirds/edit"}
              variant="outlined"
              color="primary"
              onClick={() => console.log("going to edit")}
              state={ {} }
            >
              {"Nuevo"}
            </ButtonGoTo>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Thirds;
