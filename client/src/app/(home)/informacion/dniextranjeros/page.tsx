import { DNIExtranjeros } from '@/components/pages/informacion/DNIExtranjeros'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DNI Extranjeros',
}

export default function DNIExtranjerosPage() {
  return <DNIExtranjeros />
}
