import { Typography } from "@mui/material"
import { Fragment } from "react"
import { useNavigate, useParams } from "react-router-dom"
import FormEntidad from "../../components/forms/third"
import { useDocument } from "../../services/store"

const Third = () => {
  const { id } = useParams<"id">();
  const navigate = useNavigate();

  const [data, loading, saveDocument] = useDocument("entidades", id === "new" ? undefined : id);
  const onSubmit = saveDocument ? async (data: any) => {
    await saveDocument(data);
    navigate("/entidades")
  } : undefined

  return (
    <Fragment>
      <Typography variant="h4" mb={2}>{"Editar Entidad"}</Typography>
      { loading ? <div>{"Loading..."}</div> : <FormEntidad document={data} onSubmit={onSubmit} /> }
    </Fragment>
  );
}

export default Third;
