import Input from './Input';
import Button from './Button';
import { handleLogin } from '../services/loginsystem';

export default function LoginForm({ setFormType }) {
    return <form className='flex flex-col' action={handleLogin}>
        <h1 className="text-primary font-bold text-3xl text-center">Sign In</h1>
        <p className="text-center text-sm mt-4 mb-4 text-dark/50 dark:text-light/50">
            Stay connected, Stay updated
        </p>

        <Input type="text" name="username" placeholder="Username" required></Input>
        <Input type="password" name="password" placeholder="Password" required></Input>

        <Button type="submit" className="mt-6">Login</Button>
        <p
            onClick={() => setFormType("resetpassword")}
            className="text-primary text-center mt-1 cursor-pointer font-medium"
        >Forgot password?</p>

        <hr className="mt-4 border-dark dark:border-light"></hr>

        <p className='text-dark dark:text-light text-center mt-8'>
            Don't have an account?
            <span
                className='text-primary font-medium cursor-pointer'
                onClick={() => setFormType("signup")}
            >Sign up</span>
        </p>
    </form>
}