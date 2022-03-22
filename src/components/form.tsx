import { Button, Card, CardActions, CardContent, MenuItem, TextField } from "@mui/material"
import { Save } from "@mui/icons-material"
import { useEffect, useState, ReactElement } from "react"
import { useForm, Controller } from "react-hook-form";
import { DocumentData } from "firebase/firestore"
import { getTextField, ModelField } from "../model";

type FormComponent = (props: {
  document: DocumentData | undefined, 
  fields: ModelField[],
  onSubmit?: (data: DocumentData) => any
}) => ReactElement

const Form : FormComponent = ({document, fields, onSubmit }) => {
  const [cache, setCache] = useState(document);
  const { control, handleSubmit, reset} = useForm({defaultValues: document  });
  
  
  //handle external change
  useEffect( () => {
      if (cache !== document) {
          reset(document);
          setCache(document);
      }
  }, [cache, document, reset])

  return (
    <Card component={"form"} onSubmit={handleSubmit(onSubmit || console.log)}>
      <CardContent
        sx={{
          "& > :not(style)": { m: 1 },
        }}
      >
        {fields.map(format => (
          <Controller
            name={format.path || format.id}
            control={control}
            render={({ field }) => (
              <TextField { ...getTextField(format) } {...field}>
                { format.options && format.options.map( ({value, disabled, label}) => <MenuItem value={value} disabled={disabled} >{label}</MenuItem> ) }
              </TextField>
            )}
          />
        ))}
      </CardContent>
      <CardActions sx={{
        "& > :not(style)": { m: 1 },
      }}>
        <Button disabled={!onSubmit} type="submit" startIcon={<Save />} variant="contained">
          Guardar
        </Button>
      </CardActions>
    </Card>
  );
}

export default Form;
