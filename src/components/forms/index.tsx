import { ReactElement } from "react"
import { DocumentData } from "firebase/firestore"
import { Controller } from "react-hook-form"
import { Checkbox, FormControlLabel, MenuItem, TextField, TextFieldProps } from "@mui/material"
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
        checkbox?: boolean,
    }) : ReactElement
}

export const Control: IControl = ({ control, name, options, fieldProps, checkbox }) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, onBlur, value, name, ref } }) =>
      checkbox ? (
        <FormControlLabel
          control={<Checkbox required={fieldProps?.required} />}
          sx={fieldProps?.sx}
          label={typeof fieldProps?.label === "string" ? fieldProps?.label : name}
          name={name}
          checked={value}
          onBlur={onBlur}
          onChange={onChange}
          inputRef={ref}
        />
      ) :  (
        <TextField
          id={name}
          label={name}
          {...fieldProps}
          name={name}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          inputRef={ref}
        >
          {options?.map(({ value, disabled, label }) => (
            <MenuItem value={value} disabled={disabled}>
              {label}
            </MenuItem>
          ))}
        </TextField>
      )
    }
  />
);
