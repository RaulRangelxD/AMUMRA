'use client'

import { DownToUpAnimation } from '@/components/Animations'
import { LandingImage } from '@/components/LandingImage'

export const DNIExtranjeros = () => {
  return (
    <div className='flex flex-col w-full'>
      <LandingImage bg='bg-[url(/misionehistoria.png)]' text='Ingreso y Egreso al Pais' />
      <div className='flex flex-col px-2 lg:px-12 py-12 justify-center items-center'>
        <div className='max-w-[100%] lg:max-w-2xl space-y-8'>
          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>1. ¿Cómo sé si debo renovar mi DNI y antes de qué fecha debo hacerlo?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              A partir del 1 de Abril del 2016 el único DNI válido será el DNI formato tarjeta. Por lo dicho, si Ud. posee solo DNI libreta, deberá renovarlo. Caso que tenga cualquiera de los modelos
              de DNI tarjeta, estos son todos válidos y no debe realizar el trámite de renovación. Igualmente puede consultarlo en la página web{' '}
              <a className='font-bold cursor-pointer hover:underline' href='http://www.mininterior.gov.ar'>
                www.mininterior.gov.ar
              </a>
              .
            </p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>2. Tengo el DNI libreta y debo renovarlo antes de como indicaron, ¿dónde tengo que realizar el trámite?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              Si Ud. vive en Capital Federal, debe realizar el trámite en Hipólito Yrigoyen 952 (CABA) con turno previo. El mismo se obtiene de esta página web haciendo clic en “solicitá tu turno
              online”. Si Ud. se domicilia en provincia, la renovación se realiza en el Registro Civil o CDR más cercano.
            </p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>3. ¿Qué documentación debo presentar para obtener mi nuevo DNI?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              De acuerdo al tipo de trámite que deba realizar, Ud. puede consultar los requisitos en esta página web haciendo clic en{' '}
              <a className='font-bold cursor-pointer hover:hover:hover:underline' href='#'>
                DNI para extranjeros
              </a>
              .
            </p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>4. ¿Cómo me llega mi nuevo DNI?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              El nuevo DNI es entregado directamente en el domicilio declarado por el titular por medio de pieza postal certificada, contra la presentación del comprobante de inicio de trámite. El
              servicio de correo visita el domicilio en dos oportunidades. En caso de no poder efectuarse la entrega, el DNI es enviado a:
            </p>
            <ul className='list-disc mx-1 mt-4'>
              <li>Si Ud. vive en provincia: se remite a la oficina donde Ud. realizó el trámite.</li>
              <li>Si Ud. vive en Capital Federal: se remite a la calle Jujuy 468 (CABA).</li>
            </ul>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>5. Recibí mi DNI y posee un error en sus datos. ¿Qué debo hacer?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Debe acercarse sin turno a la oficina donde realizó el trámite de su DNI y solicitar su corrección.</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>6. Soy extranjero con residencia permanente y tengo más de 75 años, ¿debo renovar mi DNI?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>No es obligatoria la renovación para los mayores de 75 años.</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>7. Ya realicé el trámite de mi nuevo DNI y no me ha llegado, ¿cómo puedo saber en qué estado se encuentra?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              Puede acercarse a la oficina donde realizó el trámite o consultar el estado del mismo a través de la página{' '}
              <a className='font-bold cursor-pointer hover:hover:underline' href='http://www.mininterior.gov.ar/tramitesyservicios/estado-tramite-dni.php'>
                http://www.mininterior.gov.ar/tramitesyservicios/estado-tramite-dni.php
              </a>
              .
            </p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>8. ¿A qué edad los/as niños/as deben renovar su DNI?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Se realiza la primer renovación entre los 5 y antes de cumplir los 8 años y la segunda renovación a los 14 años.</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>9. Tengo un familiar que no puede movilizarse, ¿cómo puedo gestionar la renovación de su DNI para extranjeros?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              Si su domicilio es en provincia, debe realizar el pedido ante el registro Civil o CDR más cercano, también puede solicitarlo en la calle Perón 664 (CABA). Si su domicilio es en Capital
              Federal debe acercarse a Hipólito Yrigoyen 952 (CABA) o solicitarlo por mail a{' '}
              <a className='font-bold cursor-pointer hover:underline' href='mailto:trámites.dni@migraciones.gov.ar'>
                trámites.dni@migraciones.gov.ar
              </a>{' '}
              y personal de esta Dirección Nacional de Migraciones se pondrá en contacto para explicarle los requisitos y coordinar, en caso de corresponder, una fecha para realizar el trámite a
              domicilio.
            </p>
          </DownToUpAnimation>
        </div>
      </div>
    </div>
  )
}
