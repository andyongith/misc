import { useState } from 'react'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

export default function Login() {
    const [formtype, setFormType] = useState('login');

    return <div className='flex justify-center items-center w-screen h-screen bg-light dark:bg-dark/90'>
        <main className="w-sm h-fit bg-light dark:bg-dark/50 rounded-xl shadow-[0px_0px_20px] shadow-primary/50 p-7 m-3">
            {formtype === "login" ? <LoginForm setFormType={setFormType} /> : <SignupForm />}
        </main>
    </div>
}