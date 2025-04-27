import Input from './Input'
import Button from './Button'
import handleLogin from '../services/loginsystem'

export default function LoginForm({setFormType}) {
    return <form action={handleLogin}>
        <h1 className="text-primary font-bold text-3xl text-center m-2">Sign In</h1>
        <p className="text-center text-sm m-2 text-dark/50 dark:text-light/50">Stay updated on your professional work</p>

        <Input type="text" name="username" placeholder="Username"></Input>
        <Input type="password" name="password" placeholder="Password"></Input>
        <Button type="submit">Login</Button>
        <p onClick={() => setFormType("resetpassword")} className="text-primary text-center m-0 cursor-pointer">Forgot password?</p>
        <hr className="m-4 w-full bg-dark dark:bg-light" />
        <Button onClick={() => setFormType("signup")}>Create new account</Button>
    </form>
}