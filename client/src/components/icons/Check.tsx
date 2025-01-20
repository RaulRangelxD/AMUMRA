interface CheckIconProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string
  className?: string
}

export const CheckIcon = ({ size = 'md', color = '', className = '' }: CheckIconProps) => (
  <svg className={`${size === 'sm' ? 'size-6' : size === 'md' ? 'size-8' : 'size-10'} ${color} ${className}`} fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
    <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 12.75 6 6 9-13.5' />
  </svg>
)
