import Header from "../components/Header"
import SideNavigationBar from "../components/SideNavigationBar"
import { useNavigate } from "react-router";
import getCurrentUser from "../services/getCurrentUser";

export default function PageBase({ children, className = "", ...props }) {
    const navigate = useNavigate();
    getCurrentUser().then(({user}) => {
        if(!user) navigate("/login");
    });

    return <div className="
    flex flex-col w-full min-h-screen h-full bg-light dark:bg-dark/85
    text-dark dark:text-light items-center pl-20 pt-20
    ">
        <Header className="" />
        <SideNavigationBar />
        <div className={"p-4 " + className} {...props}>
            {children}
        </div>
    </div>
}