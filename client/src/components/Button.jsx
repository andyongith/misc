export default function Button({ children, ...props }) {
    return <button
        className="p-2 m-2 rounded-xl w-full text-light bg-primary"
        {...props}
    >
        {children}
    </button>
}