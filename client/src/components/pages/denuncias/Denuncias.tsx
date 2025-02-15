'use client'

import { DownToUpAnimation } from '@/components/Animations'
import { LandingImage } from '@/components/LandingImage'
import { LinkButton } from '@/components/buttons/LinkButton'

export const Denuncias = () => {
  const buttonsItems = [
    { title: 'Fiscalías Federales', href: 'https://www.mpf.gob.ar/mapa-fiscalias/#' },
    { title: 'Busca Tu Comisaría', href: 'https://www.buenosaires.gob.ar/justiciayseguridad/buscador-de-comisarias' },
  ]
  return (
    <div className='flex flex-col w-full'>
      <LandingImage bg='bg-[url(/misionehistoria.png)]' text='Denuncias' />
      <section className=''>
        <div className='flex flex-col items-center px-2 lg:px-12 py-2 lg:py-8 justify-center space-x-0 lg:space-x-4'>
          <div className='flex justify-center mt-4 rounded-xl'>
            <DownToUpAnimation amount={0.2} className='flex flex-col justify-center items-center'>
              <h2 className='font-bold text-xl'>Información para Distinstas Denuncias</h2>
              <p className='mt-6'>Si eres migrante o refugiada victima de violencias</p>
              <p className='font-bold'>Linea AMUMRA : 11-6330-0000 (Las 24 horas)</p>
            </DownToUpAnimation>
          </div>
          <div className='grid grid-col-1 lg:grid-cols-2 gap-8 my-8'>
            <DownToUpAnimation amount={0.2} className='row-span-2 flex flex-col justify-center items-start'>
              <h2 className='font-bold text-xl'>Denuncias desaparecid@s</h2>
              <p className='mt-6'>
                Si una persona desaparece: No hay que esperar 48 horas para hacer la denuncia. Las primeras horas son fundamentales para la investigación judicial. No importa género, edad ni
                nacionalidad
              </p>
              <p className='mt-2'>
                Telefónicamente: <span className='font-bold'>Línea 145</span>
              </p>
              <p className='mt-2'>Número para denunciar en forma anónima y gratuita las 24 horas, los 365 días del año desde cualquier lugar del país</p>
            </DownToUpAnimation>
            <DownToUpAnimation amount={0.2} className='flex flex-col justify-start items-start'>
              <h2 className='font-bold text-xl'>Explotación sexual y laboral</h2>
              <p className='mt-6'>Programa Nacional de Rescate y Acompañamiento a las Víctimas de Trata de Personas Ministerio de Justicia y Derechos Humanos</p>
              <p className='underline'>oficinarescate@jus.gov.ar</p>
            </DownToUpAnimation>
            <DownToUpAnimation amount={0.2} className='flex flex-col justify-start items-start'>
              <h2 className='font-bold text-xl'>Ministerio de Trabajo</h2>
              <p className='underline'>denuncias@trabajo.gob.ar </p>
            </DownToUpAnimation>
            <DownToUpAnimation amount={0.2} className='flex flex-col justify-start items-start'>
              <h2 className='font-bold text-xl'>Procuraduría de Trata y Explotación de Personas (PROTEX) </h2>
              <p className='underline'> ufase@mpf.gov.ar </p>
            </DownToUpAnimation>
            <DownToUpAnimation amount={0.2} className='flex flex-col justify-start items-start'>
              <h2 className='font-bold text-xl'>Secretaría Nacional de la Niñez, Adolescencia y Familia de la Nación</h2>
              <p className='underline'>privada@senaf.gov.ar</p>
            </DownToUpAnimation>
            <DownToUpAnimation amount={0.2} className='flex flex-col justify-start items-start'>
              <h2 className='font-bold text-xl'>Tu Información es importante</h2>
              <p>
                No dudes en hacer tu denuncia <br /> <span className='underline'>Desde el 2008 se han rescatado más de 16.000 personas víctimas de Trata.</span>
              </p>
            </DownToUpAnimation>
            <DownToUpAnimation amount={0.2} className='flex flex-col justify-center items-start'>
              <h2 className='font-bold text-xl text-red-500'>
                Urgencias generales: Llama al <span className='underline'>911</span>
              </h2>
            </DownToUpAnimation>
          </div>
          <div className='flex flex-row justify-center items-center mt-4 gap-3'>
            {buttonsItems.map((item) => (
              <DownToUpAnimation amount={0.2} key={item.title}>
                <LinkButton color='btn-primary-first' className='text-default-dark' href={item.href}>
                  {item.title}
                </LinkButton>
              </DownToUpAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
