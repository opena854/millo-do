import { SelectOption } from "@mui/base";
import { TextFieldProps } from "@mui/material";
import { GridColumns } from "@mui/x-data-grid";

interface Model {
  dbPath: string,
  fields: ModelField[]
}

export interface ModelField {
  id: string,
  path?: string,
  label?: string,
  size?:  'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl',
  required?: boolean,
  options?: SelectOption<any>[]
}

export default Model

const sizes = { 
  'xxs': 0.2,
  'xs': 0.5,
  'sm': 1,
  'md': 1.5,
  'lg': 2.8,
  'xl': 3,
  'xxl': 5
 }
 

export const getGridColumns = (fields: ModelField[]) : GridColumns => fields.map(field => ({
  field: field.path || field.id,
  headerName: field.label || field.id,
  minWidth: 200 * sizes[field.size || 'md'],
  valueGetter: field.options ? (params => (field.options?.find( opt => opt.value === params.value )?.label || "N/D")) : undefined
}))

export const getTextField = (field: ModelField) : TextFieldProps => ({
  id: field.id,
  name: field.path || field.id,
  required: field.required,
  label: field.label || field.id,
  sx: { minWidth: 200 * sizes[field.size || 'md'], m: 1 },
  select: field.options && !!field.options.length
})

export const getTextFields = (fields: ModelField[]) : TextFieldProps[] => fields.map(getTextField)

