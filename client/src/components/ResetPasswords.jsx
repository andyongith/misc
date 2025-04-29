import { useState } from 'react';
import Button from './Button';

export default function ResetPassword() {
    const refuses = [
        "",
        "Nah",
        "Nahi yaar",
        "Abe jaa na tu",
        "Nahi hoga yaar",
        "Haar maan le"
    ]
    const [refuse, setRefuse] = useState(0);

    return <div className='flex flex-col items-center'>
        <h1 className="text-primary font-bold text-3xl text-center mt-6">Forgot Password?</h1>
        <p className='text-dark dark:text-light mb-2'>Sorry bro, but you're out of luck today.</p>
        <Button
            onClick={() => setRefuse((refuse+1) % refuses.length)}
        >
            Please....
        </Button>
        <p className='text-dark dark:text-light mt-4'>{refuses[refuse]}</p>
    </div>
}