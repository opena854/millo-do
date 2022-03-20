import { Paper, Typography } from "@mui/material"
import { Fragment } from "react"
import { useParams } from "react-router-dom"
import { useThird } from "../services/store"

const THIRD_ID_TYPE_DESC = ["Cédula", "RNC", "Pasaporte"]
const _choose = <T extends unknown>(value: number, ...options: T[]) => options[value]
const thirdIdTypeDesc = (tipo_id: number | undefined) => _choose(tipo_id || 0, ...THIRD_ID_TYPE_DESC)

const Third = () => {
    const { id } = useParams<"id">()
    const data = useThird(id)

    return (
        <Fragment>
            <Typography variant="h4" mb={2} >Editar Tercero</Typography>
            <Paper elevation={3}>
                <ul>
                    <li>
                        <Typography mr={1} >
                            <strong>{thirdIdTypeDesc(data?.tipo_id)}:</strong>
                        </Typography>
                        <Typography >
                            {data?.id}
                        </Typography>
                    </li>
                    <li>
                        <Typography mr={1} >
                            <strong>Nombre:</strong>
                        </Typography>
                        <Typography >
                            {data?.nombre}
                        </Typography>
                    </li>
                </ul>
            </Paper>
            </Fragment>
    )
}


export default Third;
