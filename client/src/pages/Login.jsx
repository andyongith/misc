import { useState } from 'react'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'
import Logo from '../components/Logo';
import ResetPassword from '../components/ResetPasswords';
import back_arrow from '../assets/icons/back_arrow.svg'
import logo_primary from '../assets/logo/logo_primary.svg'

function BackButton({ action, children, className = "", ...props }) {
    return <img
        src={back_arrow}
        alt="back"
        onClick={action}
        className={'cursor-pointer bg-primary/10 p-2 rounded-xl absolute top-5 left-5 ' + className}
        {...props}
    />
}

export default function Login() {
    const [formtype, setFormType] = useState('login');

    fetch(`${import.meta.env.VITE_API_URL}/api/v1/auth/logout`);

    return <div className='
        flex justify-center items-center w-screen min-h-screen h-fit bg-primary/15
        dark:bg-dark/90 pb-10
    '>
        <Logo className='fixed top-5 left-5' />
        <main className="
            w-sm h-fit bg-light dark:bg-dark/50 rounded-3xl shadow-[0px_0px_20px]
            shadow-primary/50 p-10 relative mt-20
        ">
            {formtype !== "login" && <BackButton action={() => setFormType("login")} />}
            {formtype === "login" && <LoginForm setFormType={setFormType} />}
            {formtype === "signup" && <SignupForm />}
            {formtype === "resetpassword" && <ResetPassword />}
        </main>
    </div>
}