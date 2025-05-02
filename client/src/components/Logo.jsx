import { Link } from 'react-router'
import logo_primary from '../assets/logo/logo_primary.svg'

export default function Logo({ children, className, ...props }) {
    return <div className={className} {...props}>
        <Link to="/">
            <img src={logo_primary} alt="LinkBACK" className='h-8' />
            {children}
        </Link>
    </div>
}