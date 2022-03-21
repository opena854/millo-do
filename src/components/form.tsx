import { Button, Card, CardActions, CardContent, TextField, TextFieldProps } from "@mui/material"
import { Save } from "@mui/icons-material"
import { useEffect, useState, ReactElement } from "react"
import { useForm, Controller } from "react-hook-form";
import { DocumentData } from "firebase/firestore"

type FormComponent = (props: {
  document: DocumentData | undefined, 
  fields: TextFieldProps[],
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
        {fields.map((format) => (
          <Controller
            name={format.name || ""}
            control={control}
            render={({ field }) => (
              <TextField label={format.label} {...field} />
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
