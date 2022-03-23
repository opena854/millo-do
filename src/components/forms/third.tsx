import { Button, Card, CardActions, CardContent } from "@mui/material"
import { Save } from "@mui/icons-material"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import { Control, IFormComponent } from ".";

const TIPO_DOCUMENTO = [{value: 0, label: "Cédula"}, {value: 1, label: "RNC"}, {value: 2, label: "Pasaporte"}]

const ThirdForm : IFormComponent = ({document, onSubmit }) => {
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
        <Control
          control={control}
          name={"tipo_documento"}
          fieldProps={{
            label: "Tipo de Documento",
            required: true,
            sx: { minWidth: 200, m: 1 },
            select: true,
          }}
          options={TIPO_DOCUMENTO}
        />
        <Control
          control={control}
          name={"documento"}
          fieldProps={{
            label: "Documento",
            required: true,
            sx: { minWidth: 200, m: 1 },
          }}
        />

        <Control
          control={control}
          name={"nombre"}
          fieldProps={{
            label: "Nombre",
            required: true,
            sx: { minWidth: 400, m: 1 },
          }}
        />
      </CardContent>
      <CardActions
        sx={{
          "& > :not(style)": { m: 1 },
        }}
      >
        <Button
          disabled={!onSubmit}
          type="submit"
          startIcon={<Save />}
          variant="contained"
        >
          Guardar
        </Button>
      </CardActions>
    </Card>
  );
}

export default ThirdForm;
