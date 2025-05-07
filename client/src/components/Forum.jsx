import Post from "./Post";

export default function Forum({ posts }) {
    return (
        <div className="p-4 w-full">
            {posts && posts.length > 0 ? (
                posts.map(post => <Post key={post._id} post={post} />)
            ) : (
                <p>No posts yet. Be the first to speak your mind!</p>
            )}
        </div>
    );
}