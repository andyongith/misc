export default function Input({ children, ...props }) {
    return <input
        className="border-1 p-2 m-2 rounded-xl w-full border-dark dark:border-light text-dark dark:text-light"
        {...props}
    >
        {children}
    </input>
}