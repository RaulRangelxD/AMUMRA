import { ReferentasComunas } from '@/components/pages/redfederal/ReferentasComunas'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Referentas Comunas',
}

export default function ReferentasComunasPage() {
  return <ReferentasComunas />
}
