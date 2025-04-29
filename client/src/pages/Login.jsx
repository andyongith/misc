import { useState } from 'react'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'
import ResetPassword from '../components/ResetPasswords';

function BackButton({ action, children, className = "", ...props }) {
    return <img
        src="./resources/back_arrow.svg"
        alt="back"
        onClick={action}
        className={'cursor-pointer bg-primary/10 p-2 rounded-xl absolute top-5 left-5 ' + className}
        {...props}
    />
}

export default function Login() {
    const [formtype, setFormType] = useState('login');

    return <div className='
        flex justify-center items-center w-screen min-h-screen h-fit bg-primary/15 dark:bg-dark/90
    '>
        <main className="
            w-sm h-fit bg-light dark:bg-dark/50 rounded-3xl shadow-[0px_0px_20px]
            shadow-primary/50 p-10 relative
        ">
            {formtype !== "login" && <BackButton action={() => setFormType("login")} />}
            {formtype === "login" && <LoginForm setFormType={setFormType} />}
            {formtype === "signup" && <SignupForm />}
            {formtype === "resetpassword" && <ResetPassword />}
        </main>
    </div>
}