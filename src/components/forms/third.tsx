import { Box, Button, Card, CardActions, CardContent } from "@mui/material"
import { Save } from "@mui/icons-material"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import { Control, IFormComponent } from ".";
import { getMinWidth, TIPO_DOCUMENTO } from "../../model";


const FormEntidad : IFormComponent = ({document, onSubmit }) => {
  const [cache, setCache] = useState(document);
  const { control, handleSubmit, reset, watch } = useForm({defaultValues: document  });
  
  const isClient = watch("es_cliente")

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
        <Box m={0}>
          <Control
            control={control}
            name={"tipo_documento"}
            fieldProps={{
              label: "Tipo de Documento",
              required: true,
              sx: { minWidth: getMinWidth("sm"), m: 1 },
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
              sx: { minWidth: getMinWidth("sm"), m: 1 },
            }}
          />

          <Control
            control={control}
            name={"nombre"}
            fieldProps={{
              label: "Nombre",
              required: true,
              sx: { minWidth: getMinWidth("md"), m: 1 },
            }}
          />
          
        </Box>

        <Box sx={{m: 0}}>
        <Control
            control={control}
            name={"es_cliente"}
            checkbox={true}
            fieldProps={{
              label: "Es cliente",
              required: true,
              sx: { minWidth: getMinWidth("xl"), m: 1 },
            }}
          />
          { isClient ? 
          <Box>
            <Control
              control={control}
              name={"cliente.tipo_ncf"}
              checkbox={true}
              fieldProps={{
                label: "Tipo de NCF",
                required: true,
                sx: { minWidth: getMinWidth("md"), m: 1 },
              }}
              options={[
                { value: "01", label: "01" },
                { value: "02", label: "02" },
                { value: "14", label: "14" },
                { value: "15", label: "15" },
              ]}
            />
          </Box>
          : null } 
        </Box>
      </CardContent>
      <CardActions
        sx={{
          "& > :not(style)": { m: 1 },
        }}
      >
        <Button disabled={!onSubmit} type="submit" startIcon={<Save />} variant="contained">
          Guardar
        </Button>
      </CardActions>
    </Card>
  );
}

export default FormEntidad;
