interface SimpleCardProps {
  className?: string
  icon?: React.ReactNode
  title: string
  description: string
}

export const SimpleCard = ({ className, title, description, icon }: SimpleCardProps) => (
  <div className={`${className} flex flex-col justify-center items-center p-8 space-y-2 shadow-xl aspect-square`}>
    {icon}
    <h3 className='text-xl font-bold'>{title}</h3>
    <p>{description}</p>
  </div>
)
