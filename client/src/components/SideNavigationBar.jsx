import notification_icon from '../assets/icons/notification_icon.svg';
import home_icon from '../assets/icons/home_icon.svg';
import message_icon from '../assets/icons/message_icon.svg';
import university_icon from '../assets/icons/college_icon.svg';
import mentor_icon from '../assets/icons/mentor_icon.svg';
import bookmark_icon from '../assets/icons/bookmark_icon.svg';
import profile_icon from '../assets/icons/profile_icon.svg';
import { Link } from 'react-router';

function NavButton({ children, iconsrc = "", iconalt = "icon", className = "", ...props }) {
    return <div to="/" className={
        'flex items-center w-full rounded-4xl bg-light p-2 mt-2.5 mb-2.5 cursor-pointer'
        + className
    } {...props}>
        <img src={iconsrc} alt={iconalt} className='h-7'></img> {children}
    </div>
}

export default function SideNavigationBar({ children, ...props }) {
    return <nav className="fixed flex flex-col bg-primary left-0 mt-2 pt-4 pb-4 pl-2 pr-4 rounded-tr-3xl rounded-br-3xl">
        <Link to='/profile'>
            <NavButton iconsrc={profile_icon} iconalt='profile_icon'></NavButton>
        </Link>
        <NavButton iconsrc={notification_icon} iconalt='notification_icon'></NavButton>
        <hr className="border-light mt-1 mb-2 border-1 rounded-2xl w-full"></hr>
        <Link to='/'>
            <NavButton iconsrc={home_icon} iconalt='home_icon'></NavButton>
        </Link>
        <Link to='/messages'>
            <NavButton iconsrc={message_icon} iconalt='message_icon'></NavButton>
        </Link>
        <Link to='/university_insights'>
            <NavButton iconsrc={university_icon} iconalt='university_icon'></NavButton>
        </Link>
        <Link to='/mentors'>
            <NavButton iconsrc={mentor_icon} iconalt='mentor_icon'></NavButton>
        </Link>
        <Link to='/bookmarks'>
            <NavButton iconsrc={bookmark_icon} iconalt='bookmark_icon'></NavButton>
        </Link>
    </nav>
}