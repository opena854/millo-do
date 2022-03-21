import { TextFieldProps } from "@mui/material";
import { GridColumns } from "@mui/x-data-grid";

interface Model {
  dbPath: string,
  gridColumns: GridColumns,
  formFields: TextFieldProps[]
}

export default Model
