export default function Input({ children, className="", ...props }) {
    return <input
        className={"border-1 p-2 mt-4 rounded-xl w-full border-dark dark:border-light text-dark dark:text-light " + className}
        {...props}
    >
        {children}
    </input>
}