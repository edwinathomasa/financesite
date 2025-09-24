import { Link } from 'react-router-dom'
import './Button.css'

interface LinkButtonProps {
  to: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

function LinkButton({
  to,
  children,
  variant = 'primary',
  size = 'md',
  className = ''
}: LinkButtonProps) {
  const buttonClass = `button button-${variant} button-${size} ${className}`.trim()

  return (
    <Link to={to} className={buttonClass}>
      {children}
    </Link>
  )
}

export default LinkButton