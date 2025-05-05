import { useForm } from 'react-hook-form';
import Input from './Input'
import Button from './Button'
import { handleSignup } from '../services/loginsystem';
import student_dark from '../assets/icons/student_dark.svg';
import student_light from '../assets/icons/student_light.svg';
import alumnus_dark from '../assets/icons/alumnus_dark.svg';
import alumnus_light from '../assets/icons/alumnus_light.svg';

function SectionHeader({ children, className = "", ...props }) {
    return <div className={'flex items-center  font-semibold mt-7 ' + className} {...props}>
        <hr className='w-full border-dark dark:border-light' />
        <p className='w-screen text-center text-dark dark:text-light'>{children}</p>
        <hr className='w-full border-dark dark:border-light' />
    </div>
}

function TypeRadioButton({ register, children, value, className = "", src = "", darksrc = "", alt = "", ...props }) {
    return <div>
        <input
            type='radio'
            {...register("usertype", {
                required: { value: true, message: "usertype is required" }
            })}
            id={value}
            value={value}
            className='peer hidden'
        />

        <label
            htmlFor={value}
            className={
                'flex flex-col justify-end items-center h-full rounded p-1 peer-checked:outline-1 '
                + className} {...props}
        >
            {src !== "" && <img src={src} alt={alt} className='block dark:hidden h-28'></img>}
            {darksrc !== "" && <img src={darksrc} alt={alt} className='hidden dark:block h-28'></img>}
            {children}
        </label>
    </div>
}

function Section1({ register, ...props }) {
    return <div {...props}>
        <SectionHeader>Create account as</SectionHeader>

        <div className='flex justify-around mt-4 text-dark dark:text-light'>
            <TypeRadioButton
                value="student"
                src={student_light}
                darksrc={student_dark}
                alt="student"
                register={register}
            >Student</TypeRadioButton>

            <TypeRadioButton
                value="alumnus"
                src={alumnus_light}
                darksrc={alumnus_dark}
                alt="alumnus"
                register={register}
            >Alumnus</TypeRadioButton>
        </div>
    </div>
}

function Section2({ register, ...props }) {
    return <div {...props}>
        <SectionHeader>Account details</SectionHeader>

        <Input
            type="text"
            placeholder="Full Name"
            {...register("name", {
                required: { value: true, message: "fullname is required" },
                minLength: { value: 2, message: "fullname must be at least 2 characters long" },
                maxLength: { value: 100, message: "fullname must be at most 100 characters long" }
            })}
        />

        <Input
            type="text"
            placeholder="email"
            {...register("email", {
                required: { value: true, message: "email is required" },
                minLength: { value: 2, message: "email must be at least 2 characters long" },
                maxLength: { value: 100, message: "email must be at most 100 characters long" }
            })}
        />

        <div className='flex flex-row items-center'>
            <label className='text-dark dark:text-light text-right pr-4 pt-4 w-full'>
                Date of Birth
            </label>
            <Input
                type="date"
                placeholder='DOB: dd/mm/yyyy'
                {...register("dateOfBirth", {
                    required: { value: true, message: "DOB is required" },
                    valueAsDate: true
                })}
                className='dark:bg-light/50'
            />
        </div>
    </div>
}

function Section3({ register, watch, ...props }) {
    const password = watch("password");

    return <div {...props}>
        <SectionHeader>Authentication</SectionHeader>

        <Input
            type="text"
            placeholder="username"
            {...register("username", {
                required: { value: true, message: "username is required" },
                minLength: { value: 3, message: "username must be at least 3 characters long" },
                maxLength: { value: 20, message: "username must be at most 20 characters long" }
            })}
        />

        <Input
            type="password"
            placeholder="password"
            {...register("password", {
                required: { value: true, message: "password is required" },
                minLength: { value: 3, message: "password must be at least 5 characters long" },
                maxLength: { value: 20, message: "password must be at most 20 characters long" }
            })}
        />

        <Input
            type="password"
            placeholder="confirm password"
            {...register("repassword", {
                required: { value: true, message: "you must confirm your password" },
                validate: v => (v === password || "passwords did not match")
            })}
        />
    </div>
}

export default function SignupForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    return <form action={handleSubmit(handleSignup)}>
        <h1 className="text-primary font-bold text-3xl text-center">Sign Up</h1>

        <Section1 register={register} />
        <Section2 register={register} />
        <Section3 register={register} watch={watch} />

        {
            ["usertype", "name", "email", "dateOfBirth", "username", "password", "repassword"].reduce(
                (initial, current) => <>
                    {initial}
                    {errors[current] && <p className='text-accent-red pl-1'>{errors[current].message}</p>}
                </>,
                false
            )
        }

        <Button type="submit" className='mt-6'>Submit</Button>
    </form>
}