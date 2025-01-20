interface RightIconProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string
  className?: string
}

export const RightIcon = ({ size = 'md', color = '', className = '' }: RightIconProps) => (
  <svg className={`${size === 'sm' ? 'size-6' : size === 'md' ? 'size-8' : 'size-10'} ${color} ${className}`} fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
    <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
  </svg>
)
