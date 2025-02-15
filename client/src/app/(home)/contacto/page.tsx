import { Contacto } from '@/components/pages/contacto/Contacto'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto',
}

export default function ContactoPage() {
  return <Contacto />
}
