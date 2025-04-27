import Input from './Input'
import Button from './/Button'

const handleLogin = data => {
    console.log("Handle your login");
    console.log(data);
}

export default function LoginForm() {
    return <form action={handleLogin}>
        <h1 className="text-primary font-bold text-3xl text-center m-2">Sign up</h1>
        <p className="text-center text-sm m-2 text-dark/50">Stay updated on your professional work</p>

        <Input type="text" placeholder="Username"></Input>
        <Input type="password" placeholder="Password"></Input>
        <Button type="submit">Submit</Button>
    </form>
}