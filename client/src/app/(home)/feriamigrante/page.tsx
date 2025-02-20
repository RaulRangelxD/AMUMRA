import { FeriaMigrante } from '@/components/pages/feriamigrante/FeriaMigrante'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Feria Migrante',
}

export default function FeriaMigrantePage() {
  return <FeriaMigrante />
}
