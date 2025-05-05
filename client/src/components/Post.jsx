export default function Post({ user, title = "", children, tags = "", images, className = "", ...props }) {
    return <div className={"bg-primary/10 mb-4 p-2 " + className} {...props}>
        <header>{user}</header>
        <h1>{title}</h1>
        <p>{children}</p>
        <p>{tags}</p>
        <p>images</p>
        <footer>buttons</footer>
    </div>
}