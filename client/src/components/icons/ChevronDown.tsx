interface ChevronDownIconProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string
  className?: string
}

export const ChevronDownIcon = ({ size = 'md', color = '', className = '' }: ChevronDownIconProps) => (
  <svg className={`${size === 'sm' ? 'size-6' : size === 'md' ? 'size-8' : 'size-10'} ${color} ${className}`} fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
    <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
  </svg>
)
