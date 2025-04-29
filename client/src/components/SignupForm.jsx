import Input from './Input'
import Button from './Button'
import { useState } from 'react';
import { handleSignup } from '../services/loginsystem';

function SectionHeader({ children, className = "", ...props }) {
    return <div className={'flex items-center  font-semibold mt-7 ' + className} {...props}>
        <hr className='w-full border-dark dark:border-light' />
        <p className='w-screen text-center text-dark dark:text-light'>{children}</p>
        <hr className='w-full border-dark dark:border-light' />
    </div>
}

function RaidoButton({ children, value, className = "", src = "", darksrc = "", alt = "", ...props }) {
    return <div>
        <input type='radio' id={value} name='studentType' value={value} className='peer hidden' />
        <label
            htmlFor={value}
            className={
                'flex flex-col justify-end items-center h-full rounded p-1 peer-checked:outline-1 '
                + className} {...props}
        >
            {src !== "" && <img src={src} alt={alt} className='block dark:hidden'></img>}
            {darksrc !== "" && <img src={darksrc} alt={alt} className='hidden dark:block'></img>}
            {children}
        </label>
    </div>
}

function Section1({ ...props }) {
    return <div {...props}>
        <SectionHeader>Create account as</SectionHeader>

        <div className='flex justify-around mt-4 text-dark dark:text-light'>
            <RaidoButton
                value="student" src="./resources/student_light.svg"
                darksrc="./resources/student_dark.svg"
                alt="student"
            >Student</RaidoButton>

            <RaidoButton
                value="alumnus"
                src="./resources/alumnus_light.svg"
                darksrc="./resources/alumnus_dark.svg"
                alt="alumnus"
            >Alumnus</RaidoButton>

            <RaidoButton
                value="admin"
                src="./resources/admin_light.svg"
                darksrc="./resources/admin_dark.svg"
                alt="admin"
            >Admin</RaidoButton>
        </div>
    </div>
}

function Section2({ ...props }) {
    return <div {...props}>
        <SectionHeader>Account details</SectionHeader>

        <Input type="text" placeholder="Full Name" required />
        <Input type="date" placeholder="Date of birth" required />
    </div>
}

function Section3({ ...props }) {
    return <div {...props}>
        <SectionHeader>Authentication</SectionHeader>

        <Input type="text" name="username" placeholder="username" required />
        <Input type="password" name="password" placeholder="password" required />
        <Input type="password" name="repassword" placeholder="confirm password" required />
    </div>
}

export default function SignupForm() {
    const [SectionNo, setSectionNo] = useState(1);
    const incrementSection = () => setSectionNo(SectionNo + 1);

    return <form action={handleSignup}>
        <h1 className="text-primary font-bold text-3xl text-center">Sign Up</h1>

        <Section1 />
        <Section2 />
        <Section3 />

        <Button type="submit" className='mt-6' onClick={incrementSection}>Submit</Button>
    </form>
}