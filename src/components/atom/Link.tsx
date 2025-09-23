import { Link as RouterLink } from 'react-router-dom'
import './Link.css'

interface LinkProps {
  to: string
  children: React.ReactNode
  className?: string
}

function Link({ to, children, className }: LinkProps) {
  return (
    <RouterLink to={to} className={className}>
      {children}
    </RouterLink>
  )
}

export default Link