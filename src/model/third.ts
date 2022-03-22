import Model from ".";

export const ThirdModel: Model = {
  dbPath: "terceros",
  fields: [
    {
      id: "tipo_documento",
      label: "Tipo de Documento",
      required: true,
      options: [{value: 0, label: "Cédula"}, {value: 1, label: "RNC"}, {value: 2, label: "Pasaporte"}],
      size: "sm"
    },
    {
      id: "documento",
      label: "Documento",
      required: true,
      size: "sm"
    },
    {
      id: "nombre",
      label: "Nombre",
      required: true,
      size: 'md'
    },
    
  ]
};


export default ThirdModel;


