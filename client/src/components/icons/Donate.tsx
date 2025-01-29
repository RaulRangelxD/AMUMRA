interface DonateIconProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string
  className?: string
}

export const DonateIcon = ({ size = 'md', color = '', className = '' }: DonateIconProps) => (
  <svg className={`${size === 'sm' ? 'size-6' : size === 'md' ? 'size-8' : 'size-10'} ${color} ${className}`} fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
    <path d='M12 6.5l-.94-.94a2.5 2.5 0 1 0-3.54 3.54l4.48 4.48 4.48-4.48a2.5 2.5 0 1 0-3.54-3.54L12 6.5z' fill='currentColor' />
    <path d='M7.5 15.5a6.5 6.5 0 0 0 9 0' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
