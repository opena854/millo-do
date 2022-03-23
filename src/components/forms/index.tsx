import { ReactElement } from "react"
import { DocumentData } from "firebase/firestore"
import { Controller } from "react-hook-form"
import { MenuItem, TextField, TextFieldProps } from "@mui/material"
import { SelectOption } from "@mui/base"

export interface IFormComponent { 
    (props: {
        document: DocumentData | undefined, 
        onSubmit?: (data: DocumentData) => any
    }) : ReactElement
} 
  
interface IControl {
    ( props: {
        control: any, 
        name: string, 
        options?: SelectOption<any>[],
        fieldProps?: TextFieldProps,
    }) : ReactElement
}

export const Control: IControl = ({control, name, options, fieldProps}) => <Controller
    name={name}
    control={control}
    render={({ field }) => (
        <TextField id={name} label={name} {...fieldProps} {...field}>
        { options?.map( ({value, disabled, label}) => <MenuItem value={value} disabled={disabled} >{label}</MenuItem> ) }
        </TextField>
    )}
/>
