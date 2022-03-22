import Model from ".";

export const ThirdModel: Model = {
  dbPath: "terceros",
  fields: [
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


