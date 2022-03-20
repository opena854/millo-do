import { Alert } from '@mui/material';
import { Lock } from '@mui/icons-material'

const Forbiden = () => <Alert severity='warning' icon={<Lock />} >Acceso no permitido.</Alert>

export default Forbiden;