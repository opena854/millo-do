
const sizes = { 
  'xxs': 0.2,
  'xs': 0.5,
  'sm': 1,
  'md': 1.5,
  'lg': 2.8,
  'xl': 3,
  'xxl': 5
}

export const getMinWidth = (size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'sm') => sizes[size] * 150

export const TIPO_DOCUMENTO = [{value: 0, label: "Cédula"}, {value: 1, label: "RNC"}, {value: 2, label: "Pasaporte"}]


