interface DefaultButtonProps {
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset' | undefined
  color?: 'btn-primary' | 'btn-secondary' | 'btn-third' | 'btn-transparent' | ''
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
}

export const DefaultButton = ({ onClick, type = undefined, color = 'btn-primary', size = 'lg', className, children }: DefaultButtonProps) => (
  <button
    onClick={onClick}
    type={type}
    className={`flex flex-row  justify-center items-center ${color} ${className} ${size === 'sm' ? 'text-xs py-0.5 px-1' : size === 'md' ? 'text-sm py-1 px-2' : 'text-md py-2 px-4'}`}
  >
    {children}
  </button>
)
