import Model from ".";

export const ThirdModel: Model = {
  dbPath: "terceros",
  gridColumns: [
    {
      field: "id",
      headerName: "Identificador",
      width: 200,
    },
    {
      field: "nombre",
      headerName: "Nombre",
      width: 400,
    },
  ],
  formFields: [
    {
      name: "id",
      label: "ID",
      required: true
    },
    {
      name: "nombre",
      label: "Nombre",
      required: true
    }
  ]
};


export default ThirdModel;


