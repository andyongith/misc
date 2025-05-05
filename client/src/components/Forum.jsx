import Post from "./Post";

export default function Forum({className="", children, ...props}) {
    return <main>
        {children}
        <Post title="Hello World in C">
            Good Morning everyone here's the code in C.<br />
            blah blah blah blah<br />
            blah blah blah blah blah blah
        </Post>
        <Post title="Hello World in Python">
            Good afternoon everyone here's the code in Python.<br />
            blah blah blah blah<br />
            blah blah blah blah blah blah
        </Post>
    </main>
}