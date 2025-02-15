import { IngresoEgresoPais } from '@/components/pages/informacion/IngresoEgresoPais'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ingreso y Egreso del Pais',
}

export default function IngresoEgresoPaisPage() {
  return <IngresoEgresoPais />
}
