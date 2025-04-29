import { useForm } from 'react-hook-form';
import Input from './Input';
import Button from './Button';
import { handleLogin } from '../services/loginsystem';

export default function LoginForm({ setFormType }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    return <form className='flex flex-col' action={handleSubmit(handleLogin)}>
        <h1 className="text-primary font-bold text-3xl text-center">Sign In</h1>
        <p className="text-center text-sm mt-2 mb-4 text-dark/50 dark:text-light/50">
            Stay connected, Stay updated
        </p>

        <Input
            type="text"
            placeholder="Username"
            {...register("username", {
                required: { value: true, message: "username is required" },
                minLength: { value: 3, message: "username must be at least 3 characters long" },
                maxLength: { value: 20, message: "username must be at most 20 characters long" }
            })}
        ></Input>

        <Input
            type="password"
            placeholder="Password"
            {...register("password", {
                required: { value: true, message: "Really, an empty password??" },
            })}
        ></Input>
        
        {
            ["username", "password"].reduce(
                (initial, current) => <>
                    {initial}
                    {errors[current] && <p className='text-accent-red pl-1'>{errors[current].message}</p>}
                </>,
                false
            )
        }

        <Button type="submit" className="mt-6">Login</Button>
        
        <p
            onClick={() => setFormType("resetpassword")}
            className="text-primary text-center mt-1 cursor-pointer font-medium"
        >Forgot password?</p>

        <hr className="mt-4 border-dark dark:border-light"></hr>

        <p className='text-dark dark:text-light text-center mt-8'>
            Don't have an account?
            <span
                className='text-primary font-medium cursor-pointer pl-2'
                onClick={() => setFormType("signup")}
            >Sign up</span>
        </p>
    </form>
}