import { Typography } from "@mui/material"
import { Fragment } from "react"
import { useParams } from "react-router-dom"
import Form from "../components/form"
import ThirdModel from "../model/third"
import { useDocument } from "../services/store"

const Third = () => {
  const { id } = useParams<"id">();
  const [data, loading] = useDocument(ThirdModel.dbPath, id);

  return (
    <Fragment>
      <Typography variant="h4" mb={2}>
        Editar Tercero
      </Typography>
      {loading ? <div>Loading...</div> : <Form document={data} fields={ThirdModel.formFields} />}
    </Fragment>
  );
}


export default Third;
