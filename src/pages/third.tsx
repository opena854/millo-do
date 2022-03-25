import { Typography } from "@mui/material"
import { Fragment } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ThirdForm from "../components/forms/third"
import { useDocument } from "../services/store"

const Third = () => {
  const { id } = useParams<"id">();
  const navigate = useNavigate();

  const [data, loading, saveDocument] = useDocument("terceros", id === "new" ? undefined : id);
  const onSubmit = saveDocument ? async (data: any) => {
    await saveDocument(data);
    navigate("/thirds")
  } : undefined

  return (
    <Fragment>
      <Typography variant="h4" mb={2}>{"Editar Tercero"}</Typography>
      { loading ? <div>{"Loading..."}</div> : <ThirdForm document={data} onSubmit={onSubmit} /> }
    </Fragment>
  );
}

export default Third;
