import { ResidenciaArgentina } from '@/components/pages/informacion/ResidenciaArgentina'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Residencias en Argentina',
}

export default function ResidenciaArgentinaPage() {
  return <ResidenciaArgentina />
}
