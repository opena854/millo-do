import { Button, Grid, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";

const defaultData = {
  nombre: "",
};

const ThirdForm = ({ onCancel, onSubmit, onDelete, data, loading }) => {
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: defaultData,
  });
  const [serverData, setServerData] = useState(loading ? null : data);

  useEffect(() => {
    if (loading && !serverData && data) {
      setServerData(data);
      Object.entries(data).forEach(([key, value]) =>
        setValue(key, value, { shouldValidate: false, shouldDirty: false })
      );
    } else if (!loading && serverData && data && serverData === data) {
      setServerData(null);
    }
    //console.log("thirdform changed", loading, data, serverData);
  }, [data, loading, serverData, setValue]);

  const onValidSubmit = (data) => {
    console.log("submitted", data);
    onSubmit && onSubmit(data);
  };

  return (
    <form id="third" onSubmit={handleSubmit(onValidSubmit)}>
      <Grid container spacing={2}>
        <Grid item>
          <Controller
            name="nombre"
            control={control}
            rules={{
              required: { value: true, message: "Obligatorio" },
              minLength: { value: 4, message: "Nombre muy corto." },
              validate: (val) =>
                (val === "Omar" && "Omar no, por favor.") || true,
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                id="nombre"
                label="Nombre"
                error={!!error}
                helperText={error?.message}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" color="primary">
            {"Guardar"}
          </Button>
        </Grid>
        {onCancel && (
          <Grid item>
            <Button variant="outlined" color="primary" onClick={onCancel}>
              {"Cancelar"}
            </Button>
          </Grid>
        )}
        {onDelete && (
          <Grid item>
            <Button variant="contained" color="secondary" onClick={onDelete}>
              {"Eliminar"}
            </Button>
          </Grid>
        )}
      </Grid>
    </form>
  );
};

export default ThirdForm;
