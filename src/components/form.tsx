import { Box, TextField, TextFieldProps } from "@mui/material"
import { useEffect, useState } from "react"
import { useForm, Controller } from "react-hook-form";
import { DocumentData } from "firebase/firestore"



const Form = ({document, fields }: {document: DocumentData | undefined, fields: TextFieldProps[]}) => {
  const [cache, setCache] = useState(document);
  const { control, handleSubmit, reset} = useForm({defaultValues: document  });
  const onSubmit = (data: any) => console.log(data);
  
  //handle external change
  useEffect( () => {
      if (cache !== document) {
          reset(document);
          setCache(document);
      }
  }, [cache, document, reset])

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
    >
      {fields.map((format) => (
        <Controller
          name={format.name || ""}
          control={control}
          render={({ field }) => <TextField label={format.label} {...field} />}
        />
      ))}
    </Box>
  );
}

export default Form;
