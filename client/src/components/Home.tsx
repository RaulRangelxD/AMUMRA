import { Landing } from './Landing'

export const Home = () => {
  return (
    <div className='flex flex-col'>
      <Landing />

      <section className='flex flex-col items-center mx-12'>
        <h1 className='max-w-[100%] lg:max-w-[60%] font-bold text-3xl text-center mt-4'>Asociación Civil de Derechos Humanos Mujeres Unidas Migrantes y Refugiadas en Argentina</h1>
        <p className='max-w-[100%] lg:max-w-[80%] text-center mt-6'>
          AMUMRA busca la integración social, económica y cultural de las mujeres migrantes, refugiadas y de sus familias, así como el respeto irrestricto de su ciudadanía global. Contribuye a la
          superación de las desigualdades históricas y contextuales para la construcción de una sociedad más justa y democrática, con respeto a todas las características de sus identidades
          individuales y colectivas, desde los enfoques de género, interculturalidad y derechos humanos.
        </p>
      </section>
    </div>
  )
}
