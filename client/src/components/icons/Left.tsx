interface LeftIconProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string
  className?: string
}

export const LeftIcon = ({ size = 'md', color = '', className = '' }: LeftIconProps) => (
  <svg className={`${size === 'sm' ? 'size-6' : size === 'md' ? 'size-8' : 'size-10'} ${color} ${className}`} fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
    <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
  </svg>
)
