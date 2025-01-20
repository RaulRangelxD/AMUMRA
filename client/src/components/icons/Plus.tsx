interface PlusIconProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string
  className?: string
}

export const PlusIcon = ({ size = 'md', color = '', className }: PlusIconProps) => (
  <svg className={`${size === 'sm' ? 'size-6' : size === 'md' ? 'size-8' : 'size-10'} ${color} ${className}`} fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
    <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
  </svg>
)
