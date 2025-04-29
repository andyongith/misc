export default function Button({ children, className = "", type="", ...props }) {
    return <button
        className={
            'p-2 mt-4 w-full text-light bg-primary '
            + (type === "submit" ? "rounded-3xl " : "rounded-xl ")
            + className
        }
        {...props}
    >
        {children}
    </button>
}