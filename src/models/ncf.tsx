import { Fecha, TipoDocumento } from "./documento"

enum NCFReporte { Compra = "606", Venta = "607" }

interface SecuenciaNCF {
  vigencia: Fecha
  desde: number
  hasta: number
}

export interface NCFType {
  codigo: string
  descripcion: string
  documentos: { [key in TipoDocumento]: true }
  reporte?: NCFReporte
  secuencia?: SecuenciaNCF[]
}

export const NCFTypes = [

]
