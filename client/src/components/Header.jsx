import Logo from "./Logo";
import options_icon from "../assets/icons/options_menu.svg";
import search_icon from "../assets/icons/search_icon.svg";
import filter_icon from "../assets/icons/filter_icon.svg";

export default function Header({ children, className = "", ...props }) {
    return <header className={"flex items-center justify-between bg-primary text-dark dark:text-light p-4 " + className}>
        <Logo logotype="light" />
        <div className="flex items-center">
            <form className="flex bg-light text-dark mr-4 p-1 rounded ">
                <button type="submit">
                    <img src={search_icon} alt="search"></img>
                </button>
                <input type="text" className="text-dark min-w-60" placeholder="Search..." />
                <img src={filter_icon}></img>
            </form>
            <div className="cursor-pointer"><img src={options_icon} className="h-8"></img></div>
        </div>
    </header>
}