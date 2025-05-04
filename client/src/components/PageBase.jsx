import Header from "../components/Header"
import SideNavigationBar from "../components/SideNavigationBar"

export default function PageBase({ children, className = "", ...props }) {
    return <div className="w-full h-screen">
        <Header className="" />
        <SideNavigationBar />
        <div className={"m-6 ml-25 bg-dark/10 " + className} {...props}>
            {children}
        </div>
    </div>
}