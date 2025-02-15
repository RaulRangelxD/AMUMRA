import { DerechosMigrantes } from '@/components/pages/informacion/DerechosMigrantes'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DNI Extranjeros',
}

export default function DerechosMigrantesPage() {
  return <DerechosMigrantes />
}
