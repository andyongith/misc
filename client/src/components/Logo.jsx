import { Link } from 'react-router'
import logo_primary from '../assets/logo/logo_primary.svg'
import logo_light from '../assets/logo/logo_light.svg'
import logo_dark from '../assets/logo/logo_dark.svg'

export default function Logo({ children, className, logotype = "primary", ...props }) {
    let logourl = {
        "primary": logo_primary,
        "light": logo_light,
        "dark": logo_dark
    }
    return <Link to="/" {...props}>
        <img src={logourl[logotype]} alt="LinkBACK" className={'h-8 ' + className} />
        {children}
    </Link>
}