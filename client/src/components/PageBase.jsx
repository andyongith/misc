import Header from "../components/Header"
import SideNavigationBar from "../components/SideNavigationBar"

export default function PageBase({ children, className = "", ...props }) {
    return <div className="
    flex flex-col w-full min-h-screen h-full bg-light dark:bg-dark/85
    text-dark dark:text-light
    ">
        <Header className="" />
        <SideNavigationBar />
        <div className={"p-4 ml-25 mr-4 " + className} {...props}>
            {children}
        </div>
    </div>
}