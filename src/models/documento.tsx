import { DateTime } from "luxon"

export type Fecha = DateTime
export type FechaHora = DateTime
export enum TipoDocumento { General="G" }
enum EstadoDocumento { Creado, Registrado, Eliminado }
enum TipoMovimientoContable { Credito="c", Debito="d" }

export interface InfoNCF {
  rnc: string
  codigo: string
  secuencia: string
  vigencia: Fecha
}

export interface MovimientoInventario {
  origen?: string
  destino?: string
  articulo: string
  unidad: string
  cantidad: number
  precio: number
  descuento: { plano: number, porcentaje: number }
  valor: number
}

export interface MovimientoContable {
  tipo: TipoMovimientoContable
  monto: number
  principal: string
  contrapartida: string
}

export interface Documento {
  id: string
  tipo: TipoDocumento.General
  estado: EstadoDocumento
  tercero?: string
  descripcion: string
  fecha_inventario: Fecha
  fecha_contabilidad: Fecha
  ncf?: InfoNCF
  costo: number
  monto_venta: number
  descuentos: number
  monto_neto: number
  impuestos: number
  monto_bruto: number
  creado: FechaHora
  modificado: FechaHora
  contabilidad: MovimientoContable[]
  inventario: MovimientoInventario[]
}
