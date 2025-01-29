interface FacebookIconProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string
  className?: string
}

export const FacebookIcon = ({ size = 'md', color = '', className = '' }: FacebookIconProps) => (
  <svg className={`${size === 'sm' ? 'size-6' : size === 'md' ? 'size-8' : 'size-10'} ${color} ${className}`} fill='currentColor' viewBox='0 0 24 24'>
    <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
  </svg>
)
