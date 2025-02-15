'use client'

import { DownToUpAnimation } from '@/components/Animations'
import { LandingImage } from '@/components/LandingImage'

export const ResidenciaArgentina = () => {
  return (
    <div className='flex flex-col w-full'>
      <LandingImage bg='bg-[url(/misionehistoria.png)]' text='Ingreso y Egreso al Pais' />
      <div className='flex flex-col px-2 lg:px-12 py-12 justify-center items-center'>
        <div className='max-w-[100%] lg:max-w-2xl space-y-8'>
          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>1. ¿Cómo solicitar un Turno de Tramitación Urgente?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              Usted deberá abonar la Tasa, ver modalidades de pago:{' '}
              <a className='font-bold cursor-pointer hover:underline' href='http://www.migraciones.gov.ar/turnos/express_fecha_minima.php' target='_blank'>
                aquí
              </a>
              . Luego volver a ingresar a la Página, y en “Continuar” cargar los datos correspondientes, respetando el domicilio que usted posee según Certificado de domicilio (recuerde diferenciar
              Ciudad Autónoma de Buenos Aires -Capital Federal- de Provincia de Buenos Aires). El Sistema le indicará Sede, Fecha y Hora en la que deberá presentarse.
            </p>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>2. Con cuanto tiempo de anticipación debo realizar la solicitud del cambio de categoría?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Se debe realizar la solicitud DENTRO de los SESENTA (60) días PREVIOS al vencimiento. NUNCA ANTES.</p>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>3. Si usted posee una radicación a vencerse o vencida que debe hacer?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>(2 MESES ANTES Ó 1 MES DESPUES DE LA FECHA DE VENCIMIENTO)</p>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              Solicitar un turno via web en{' '}
              <a className='font-bold cursor-pointer hover:underline' href='http://www.migraciones.gov.ar/accesible/indexA.php?turno_online' target='_blank'>
                aquí
              </a>
              . Si el sistema le otorga un turno posterior a su vencimiento por ejemplo: a usted le venció la Radicación 10/02 y el sistema le otorga un turno para el día 21/05 ese turno es válido
              como así también su residencia y toda la documentación que posea para dicho trámite. TODOS los plazos se suspenden. SI EL TURNO SE SACA DENTRO DEL MES DE VENCIDA LA RESIDENCIA, DEBERA
              ABONAR LA TASA CON UNA MULTA DEL 50%.
            </p>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>4. Qué plazo de demora tiene el trámite de Radicación?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              La demora en general es de 3 a 6 meses, por lo que en caso de vencer su Precaria deberá renovarla. Consulte el estado de Residencia{' '}
              <a className='font-bold cursor-pointer hover:underline' href='http://www.migraciones.gov.ar/accesible/consultaTramitePrecaria/ConsultaUnificada.php' target='_blank'>
                aquí
              </a>
              . Una vez resuelto el mismo dentro de los 30 días deberá recibir el DNI, caso contrario dirigirse a la Sede donde inicio el Tramite.
            </p>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>5. Cómo se debe consultar el estado de Estado de un Trámite?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              A los fines de verificar el estado de su trámite deberá ingresar a:{' '}
              <a className='font-bold cursor-pointer hover:underline' href='http://www.migraciones.gov.ar/accesible/consultaTramitePrecaria/ConsultaUnificada.php' target='_blank'>
                aquí
              </a>
              . Donde deberá colocar el nro. de expediente ubicado en el costado superior izquierdo de su residencia precaria y su fecha de nacimiento.
            </p>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>6. Como debo hacer para realizar la renovación del certificado de Residencia Precaria?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              Para RENOVAR su CERTIFICADO DE RESIDENCIA PRECARIA, ingrese a través del siguiente link:{' '}
              <a className='font-bold cursor-pointer hover:underline' href='http://www.migraciones.gov.ar/accesible/consultaTramitePrecaria/ConsultaUnificada.php' target='_blank'>
                aquí
              </a>
              .
            </p>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>7. Puedo renovar la Precaria si se encuentra VENCIDA?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Si.</p>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>8. Tengo nacionalidad BRASILEÑA. Puedo obtener una residencia permanente por ese motivo?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              Si. Se encuentra vigente a la fecha la Ley N° 26.240, que aprueba el Acuerdo entre la República Argentina y la República Federativa del Brasil para la concesión de la residencia
              permanente. Los requisitos específicos del trámite puede consultarlos ingresando{' '}
              <a className='font-bold cursor-pointer hover:underline' href='http://www.migraciones.gov.ar/accesible/indexA.php?residencias' target='_blank'>
                aquí
              </a>
              .
            </p>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>9. Cómo puedo obtener una residencia permanente en la Argentina?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>La actual legislación migratoria permite acceder a una residencia permanente acreditando:</p>
            <ul className='list-disc mx-1 mt-4'>
              <li>ser familiar de nacional argentino</li>
              <li>ser familiar de nacional extranjero que cuenta con residencia permanente.</li>
              <li>contar con residencia temporaria vigente por más de 2 (DOS) años, si es nacional MERCOSUR.</li>
              <li>contar con residencia temporaria vigente por más de 3 (TRES) años, si es nacional de país no perteneciente al MERCOSUR.</li>
              <li>haberse desempeñado como funcionario diplomático.</li>
            </ul>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              Los requisitos específicos para cada una de estas opciones puede consultarlos ingresando{' '}
              <a className='font-bold cursor-pointer hover:underline' href='http://www.migraciones.gov.ar/accesible/indexA.php?residencias' target='_blank'>
                aquí
              </a>
              .
            </p>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>10. Soy ciudadano de un país que no pertenece al MERCOSUR. Puedo obtener una residencia temporaria o permanente en la Argentina?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              Si. La actual legislación permite conceder en su favor una residencia temporaria de hasta 12 (DOCE) meses, acreditando encontrarse incluido en algunos de los motivos que estipula la Ley.
              Los requisitos específicos para cada uno de los casos podrá consultarlos ingresando{' '}
              <a className='font-bold cursor-pointer hover:underline' href='http://www.migraciones.gov.ar/accesible/indexA.php?residencias' target='_blank'>
                aquí
              </a>
              .
            </p>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>11. Cómo gestiono la ciudadanía argentina?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>El trámite para la obtención de la ciudadanía argentina debe efectuarse en sede judicial.</p>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              En caso de domiciliarse en la C.A.B.A podrá concurrir ante la Cámara Nacional de Apelaciones en lo Civil y Comercial Federal, Talcahuano 550 PB, oficina 2083, en el horario de 7:30 a
              12:30. Las personas domiciliadas en el resto del país deberá comparecer ante el Juzgado Nacional en lo Civil y Comercial Federal más cercano a su domicilio.
            </p>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>12. Puedo concurrir directamente a iniciar mi trámite de residencia?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>No. Debe solicitarse un turno por cada persona que quiera iniciar trámite.</p>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>13. Cuál es el costo del trámite?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              A la fecha, el trámite de residencia temporaria / permanente tiene un costo de $1000 (nacionales Mercosur) o de $2000 (países No Mercosur). Al iniciar trámite de residencia, también
              abona la tasa correspondiente para la emisión del DNI $100 (MERCOSUR) /$100 (No MERCOSUR).
            </p>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>14. Necesito tramitar mi residencia en forma URGENTE, qué opciones tengo?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              Si por razones particulares no puede esperar hasta la fecha de turno asignada para iniciar su trámite, podrá obtener un TURNO EXTRAORDINARIO que lo habilita a iniciar su trámite en el
              momento. Para ello deberá abonar una tasa adicional de $2000, aparte de la tasa correspondiente al trámite por iniciar. Para obtener dicho beneficio, deberá efectuar cumplir los
              siguientes pasos:
            </p>
            <ul className='list-disc mx-1 mt-4'>
              <li>Abonar la tasa adicional correspondiente.</li>
              <li>Seleccionar la opción “TURNO DE TRÁMITE DE RESIDENCIA/DNI Y CERTIFICACIONES” y completar el campo “Número de Orden”.</li>
            </ul>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              Más información{' '}
              <a className='font-bold cursor-pointer hover:underline' href='http://www.migraciones.gov.ar/accesible/indexA.php' target='_blank'>
                aquí
              </a>
              .
            </p>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>15. Cómo obtengo mi Certificado de Antecedentes Penales argentino?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              Le sugerimos ingresar en la página web{' '}
              <a className='font-bold cursor-pointer hover:underline' href='http://www.dnrec.jus.gov.ar' target='_blank'>
                www.dnrec.jus.gov.ar
              </a>
              , a los efectos de verificar la Sede más cercana a su jurisdicción para poder allí gestionar dicho trámite.
            </p>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>16. Cómo obtengo mi Certificado de Domicilio?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              Respecto al Certificado de Domicilio deberá ser solicitado ante la Policía Federal Argentina (para la Ciudad Autónoma de Buenos Aires). Respecto del interior del país, podrá requerirse
              ante la policía provincial, el Registro Civil o el Juzgado de Paz con jurisdicción sobre su domicilio.
            </p>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>17. Debo presentar antecedentes penales de mi país de procedencia al realizar el cambio de categoría para países de Mercosur?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              Si Usted residió efectivamente en el país más de la mitad del plazo de permanencia concedido, NO deberá presentar dicho certificado de antecedentes extranjeros.
            </p>
          </DownToUpAnimation>
          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>18. Para qué sirve el Certificado de Residencia Precaria?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              El Certificado de Residencia Precaria VIGENTE, es la constancia que emite la DNM por la cual se deja constancia que Usted cuenta con un trámite de residencia iniciado. Acredita su
              condición de extranjero en situación migratoria REGULAR. Dicho certificado VIGENTE le permite, entre otras cosas:
            </p>
            <ul className='list-disc mx-1 mt-4'>
              <li>Ingresar y egresar del país (acompañando de su documento de viaje válido y vigente)</li>
              <li>Desarrollar toda actividad lícita en el país (trabajar / estudiar / solicitar atención médica / efectuar trámites / etc.)</li>
              <li>Solicitar su C.U.I.L. provisorio en cualquier delegación de ANSES.</li>
            </ul>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>19. Ingresé los datos para solicitar la renovación del Certificado de Residencia Precaria, y el sistema me dice que no corresponde, qué hago?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              En primer lugar, verifique si los datos fueron ingresados en forma correcta, tenga en cuenta que al colocar el número de expediente, los últimos 4 dígitos corresponden al año:
            </p>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              <strong>Ej:</strong> 2155452014, deberá colocar en la 1er casilla: 215545 y en la segunda: 2014
            </p>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              En caso que al realizar la solicitud, no tome los datos y la leyenda sea: “Únicamente trámites en Sede Central” sugerimos presentarse en nuestra Sede, con dicha impresión, y su
              Residencia Precaria, en el horario de 7.30 hs a 19 hs, con el fin de brindarle una solución.
            </p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>20. Se venció mi Certificado de Residencia Precaria y debo renovarlo, cómo lo hago?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              Para los trámites iniciados en las delegaciones de la DNM en el interior del país, la renovación debe solicitarla personalmente, concurriendo a la oficina más cercana a su domicilio.
            </p>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Para los trámites iniciados en la Sede Central, debe solicitarla ingresando aquí. Los pasos a seguir son:</p>
            <ol>
              <li>Seleccionar la opción “SOLICITUD DE RENOVACIÓN DE CERTIFICADO DE RESIDENCIA PRECARIA”</li>
              <li>Ingresar su número de Expediente y la fecha de su nacimiento</li>
            </ol>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Se generará una constancia automática con su pedido, el que será procesado dentro de las 72 horas hábiles de ingresado.</p>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              Podrá visualizar / imprimir su nuevo Certificado de Residencia Precaria ingresando en la opción “SEGUI EL ESTADO DEL TRÁMITE” de la página web de la DNM, completando el número de
              expediente y su fecha de nacimiento.
            </p>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              <strong>IMPORTANTE:</strong> si transcurridas las 72 horas hábiles no puede visualizar su nuevo certificado, deberá concurrir ante la DNM a consultar el estado de su trámite, ya que no
              se autorizó la renovación solicitada.
            </p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>21. Quiero conocer información detallada del estado de mi trámite. ¿Cómo la obtengo?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              La información general respecto del estado de su trámite, la puede obtener consultando la página web de la DNM. Para acceder a información detallada del mismo, deberá concurrir
              personalmente ante la sede en la cual inició el mismo.
            </p>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Se solicita presentarse con documento de identidad y Certificado de Residencia Precaria o constancia del trámite iniciado.</p>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>La consulta debe efectuarse en forma personal.</p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>22. Inicié mi trámite de residencia y aún no recibí el DNI en mi domicilio. ¿Dónde puedo consultar por el estado del trámite?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              Debe ingresar en nuestra página web y elegir la opción “SEGUI EL ESTADO DEL TRÁMITE”. Completado el número de expediente y su fecha de nacimiento, obtendrá la información acerca del
              estado del mismo.
            </p>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>Los posibles resultados son:</p>
            <ul className='list-disc mx-1 mt-4'>
              <li>
                <strong>Faltante de Documentación:</strong> Deberá concurrir a la sede de la DNM donde inició su trámite, para notificarse respecto de la documentación que debe presentar.
              </li>
              <li>
                <strong>En proceso de supervisión:</strong> Su trámite se encuentra en proceso. Si su certificado de residencia precaria se encuentra próximo a vencer, le sugerimos que tramite su
                renovación.
              </li>
              <li>
                <strong>No hay registro:</strong> verificar el correcto tipeo de sus datos.
              </li>
              <li>
                <strong>Resuelto:</strong> Su trámite ya ha sido trabajado. Podrá imprimir una copia de la resolución adoptada.
              </li>
            </ul>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>
              23. Si solicité un turno de prórroga / cambio de categoría, con posterioridad al vencimiento de mi residencia temporaria, ¿puedo efectuar el trámite?
            </h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              Si Usted reservó el turno con antelación al vencimiento de su residencia temporaria, o 30 días posteriores al mismo, se encuentra habilitado para efectuar el trámite.
            </p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>24. Para solicitar la prórroga como estudiante, ¿debo presentar la constancia de alumno regular?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              Sí. Deberá presentar la constancia de alumno regular legalizada por el Ministerio de Educación o por la UBA (en caso de estudiantes de dicha Universidad).
            </p>
          </DownToUpAnimation>

          <DownToUpAnimation amount={0.1}>
            <h2 className='font-bold text-2xl'>25. Para solicitar la residencia como rentista, ¿debo tener una cuenta bancaria?</h2>
            <p className='max-w-[100%] lg:max-w-4xl mt-6'>
              Sí. Es necesario tener una cuenta bancaria para iniciar el trámite de residencia, debiendo acreditar ingresos mensuales superiores a 8 mil pesos argentinos.
            </p>
          </DownToUpAnimation>
        </div>
      </div>
    </div>
  )
}
