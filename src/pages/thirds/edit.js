import React from "react";
import { Container, Box, Grid, Typography } from "@material-ui/core";
import { useDocument } from "../../services/firestore";
import ThirdForm from "../../components/third";

const ThirdEdit = ({ location, history }) => {
  const { result, error, doc, loading } = useDocument({
    path: ["empresas", "doblek", "terceros", location.state?.third?._id],
  });

  // useEffect(() => {
  //   console.log("edit state", location.state);
  // }, [location.state]);

  const onSave = (data) => {
    console.log("saving", doc.path, data);
    doc.set(data).then(
      () => history.push("/thirds"),
      (error) => console.log("error on saving", doc.path, error)
    );
  };

  const onDelete = () => {
    console.log("deleting", doc.path);
    doc.delete().then(
      () => history.push("/thirds"),
      (error) => console.log("error on deleting", doc.path, error)
    );
  };
  return (
    <Container maxWidth="lg">
      <Box height="70vh">
        <Typography variant="h4" color="textPrimary">
          Tercero
        </Typography>
        <Box my={3}>
          <Grid item>
            <ThirdForm
              onCancel={() => history.push("/thirds")}
              onSubmit={onSave}
              onDelete={ location.state?.third?._id && onDelete}
              data={result}
              loading={loading}
            />
          </Grid>
        </Box>
        <Typography variant="body2" color="textSecondary">
          {loading ? "Loading..." : error?.toString()}
        </Typography>
      </Box>
    </Container>
  );
};

export default ThirdEdit;
