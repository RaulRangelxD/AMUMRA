import { Denuncias } from '@/components/pages/denuncias/Denuncias'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Denuncias',
}

export default function DenunciasPage() {
  return <Denuncias />
}
