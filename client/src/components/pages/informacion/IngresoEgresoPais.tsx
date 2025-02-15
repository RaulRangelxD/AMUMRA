'use client'

import { DownToUpAnimation } from '@/components/Animations'
import { LandingImage } from '@/components/LandingImage'

export const IngresoEgresoPais = () => {
  return (
    <div className='flex flex-col w-full'>
      <LandingImage bg='bg-[url(/misionehistoria.png)]' text='Ingreso y Egreso al Pais' />
      <div className='flex flex-col px-2 lg:px-12 py-12 justify-center items-center'>
        <div className='max-w-[100%] lg:max-w-2xl space-y-8'>
          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>Preguntas Frecuentes sobre Radicación en Argentina</h2>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h3 className='font-bold text-2xl'>1. ¿Qué documentación de mi país de origen necesito para radicarme en Argentina?</h3>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Si eres de Uruguay, Paraguay, Bolivia, Chile, Perú, Ecuador, Colombia, Venezuela o Brasil recuerda llevar:</p>
            <ul className='list-disc mx-1 mt-4'>
              <li>Partida de Nacimiento Legalizada en el Ministerio de Relaciones Exteriores con apostilla de la Haya.</li>
              <li>Certificado de Antecedentes penales del país de origen (Record Policial).</li>
            </ul>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Si piensas venir a estudiar, no olvides tu Certificado de Estudios legalizado en el Ministerio de Educación de tu país.</p>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h3 className='font-bold text-2xl'>2. ¿Cómo inicio mi trámite de radicación?</h3>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Debes gestionar tu turno online en la Página de Migraciones y preparar la siguiente documentación:</p>
            <ul className='list-disc mx-1 mt-4'>
              <li>Antecedentes Penales del País de Origen.</li>
              <li>
                Antecedentes Penales Argentinos (
                <a className='font-bold cursor-pointer hover:underline' href='http://www.dnrec.jus.gov.ar/default.aspx'>
                  Ver aquí
                </a>
                ).
              </li>
              <li>Certificado de Domicilio.</li>
              <li>4 fotografías (tamaño 4×4).</li>
            </ul>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>El día de tu turno debes presentarte con toda la documentación requerida.</p>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h3 className='font-bold text-2xl'>3. Si llegué a Argentina y estoy huyendo de mi país por persecución ¿Dónde me dirijo?</h3>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Puedes acudir a la Comisión Nacional del Refugiado (CONARE) o contactarnos para asesoría.</p>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h3 className='font-bold text-2xl'>4. Si conozco una persona en situación de violencia ¿Qué puedo hacer?</h3>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Comunícate a:</p>
            <ul className='list-disc mx-1 mt-4'>
              <li>Línea 144</li>
              <li>Línea 137</li>
            </ul>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Ambas líneas atienden las 24 horas del día.</p>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h3 className='font-bold text-2xl'>5. Estoy atravesando una situación de explotación laboral</h3>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              Puedes visitar esta página para saber más:{' '}
              <a className='font-bold cursor-pointer hover:underline' href='#'>
                Cómo Denunciar
              </a>
              .
            </p>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h3 className='font-bold text-2xl'>6. Debo sacar turno para los trámites de mis hijos/as?</h3>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Sí, es individual para cada uno/a.</p>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h3 className='font-bold text-2xl'>7. ¿Qué documentación requiero para sacar mi DNI?</h3>
            <ul className='list-disc mx-1 mt-4'>
              <li>Documento vigente del país de origen.</li>
              <li>Certificado de domicilio.</li>
              <li>Antecedentes penales del país de origen.</li>
              <li>Antecedentes penales de Argentina.</li>
            </ul>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h3 className='font-bold text-2xl'>8. ¿Sirve el DNI verde o bordó para egresar del país?</h3>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>No son válidos los siguientes documentos:</p>
            <ul className='list-disc mx-1 mt-4'>
              <li>DNI libreta verde/bordó/celeste de confección manual.</li>
              <li>Cédulas de Identidad emitidas por la Policía Federal Argentina.</li>
              <li>Libreta de Enrolamiento.</li>
              <li>Libreta Cívica.</li>
            </ul>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h3 className='font-bold text-2xl'>9. ¿Sirve el DNI libreta celeste para egresar del país?</h3>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Son válidos para viajar:</p>
            <ul className='list-disc mx-1 mt-4'>
              <li>DNI Tarjeta.</li>
              <li>Libreta Celeste Digital.</li>
              <li>Pasaporte.</li>
            </ul>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h3 className='font-bold text-2xl'>10. Si nací en Argentina, pero tengo pasaporte de otra nacionalidad, ¿puedo salir con ese pasaporte?</h3>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              Sí, si adquirió la nacionalidad de un país con convenio de nacionalidad (ej. Italia o España), puede salir con el pasaporte de la nueva nacionalidad más el DNI argentino.
            </p>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h3 className='font-bold text-2xl'>11. ¿Dónde realizar un permiso de viaje para menores en Argentina?</h3>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Puedes hacerlo con un escribano, en consulados, juzgados y otras autoridades competentes.</p>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h3 className='font-bold text-2xl'>12. ¿Dónde realizar un permiso de viaje para menores en el exterior?</h3>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>En la Representación Consular Argentina o con un escribano con Apostilla de La Haya.</p>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h3 className='font-bold text-2xl'>13. ¿Migraciones confecciona permisos de viaje?</h3>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Sí, para un solo viaje y deben utilizarse dentro de 30 días de su emisión.</p>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h3 className='font-bold text-2xl'>14. ¿Las partidas de nacimiento deben estar actualizadas?</h3>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Migraciones no exige antigüedad específica mientras sean originales o certificadas.</p>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h3 className='font-bold text-2xl'>15. ¿Pueden estar las partidas de nacimiento plastificadas?</h3>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>No es recomendable, mejor usar copias certificadas.</p>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h3 className='font-bold text-2xl'>16. ¿A qué edad debe un menor actualizar su DNI?</h3>
            <ul className='list-disc mx-1 mt-4'>
              <li>A los 5 y hasta los 8 años.</li>
              <li>A los 14 años.</li>
              <li>Desde la segunda actualización, el DNI tiene validez de 15 años.</li>
            </ul>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h3 className='font-bold text-2xl'>17. Siendo extranjero, ¿qué hacer si excedí el tiempo permitido en el país?</h3>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Deberás pagar una TASA de habilitación de salida según el tiempo vencido.</p>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h3 className='font-bold text-2xl'>18. ¿Dónde pagar la habilitación de salida?</h3>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>En Migraciones o en Aeropuertos de Ezeiza y Aeroparque.</p>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h3 className='font-bold text-2xl'>19. ¿Cuánto dinero se necesita para ingresar como turista?</h3>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Debe contar con prueba de fondos suficientes, pasaje de ida y vuelta, y reserva de hotel.</p>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h3 className='font-bold text-2xl'>20. ¿Cómo debo proceder para averiguar si poseo una restricción para salir del país?</h3>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              Le comunicamos que para averiguar si pesa alguna restricción sobre su persona deberá dirigirse a la Dirección Nacional de Migraciones sita en Av. Antártida Argentina N°1355, Retiro,
              edificio 6 letra “M”, de lunes a viernes en el horario de 08 a 18 hs o a la Delegación de Migraciones más cercana.
            </p>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              Ver delegaciones{' '}
              <a className='font-bold cursor-pointer hover:underline' href='#'>
                ingresando aquí
              </a>
            </p>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              Tenga en cuenta que el trámite es de carácter personal, deberá traer el DNI, o en su defecto apoderado debidamente autorizado (con autorización expresa por escribano a tal efecto).
            </p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h3 className='font-bold text-2xl'>21. ¿Qué documentación necesito para ir a países del Mercosur?</h3>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              Le informamos que según Decisión MERCOSUR CMC Nº 46/15 se puede viajar con DNI o Pasaporte hacia todo el MERCOSUR Y ESTADOS ASOCIADOS (exceptuando a Guyana y Surinam que requieren
              Pasaporte). Igualmente le recomendamos que averigüe los requisitos de ingreso en los consulados de los países de destino.
            </p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h3 className='font-bold text-2xl'>22. Si tengo mi DNI en trámite ¿puedo salir con la constancia del mismo?</h3>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>La constancia de DNI en trámite no es un documento hábil para egresar del país.</p>
          </DownToUpAnimation>
        </div>
      </div>
    </div>
  )
}
