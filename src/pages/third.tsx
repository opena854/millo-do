import { Typography } from "@mui/material"
import { Fragment } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Form from "../components/form"
import { getTextFields } from "../model"
import ThirdModel from "../model/third"
import { useDocument } from "../services/store"

const Third = () => {
  const { id } = useParams<"id">();
  const navigate = useNavigate();

  const [data, loading, saveDocument] = useDocument(ThirdModel.dbPath, id === "new" ? undefined : id);
  const onSubmit = saveDocument ? async (data: any) => {
    await saveDocument(data);
    navigate("/thirds")
  } : undefined

  return (
    <Fragment>
      <Typography variant="h4" mb={2}>
        Editar Tercero
      </Typography>
      {loading ? <div>Loading...</div> : <Form document={data} fields={getTextFields(ThirdModel.fields)} onSubmit={onSubmit} />}
    </Fragment>
  );
}


export default Third;
