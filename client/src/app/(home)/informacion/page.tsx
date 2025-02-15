import { Informacion } from '@/components/pages/informacion/Informacion'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Informacion',
}

export default function InformacionPage() {
  return <Informacion />
}
