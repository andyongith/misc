import { useState } from "react";
import { ArrowBigUp, ArrowBigDown, User } from "lucide-react";


export default function Post({ post }) {
    const [likes, setLikes] = useState(post.likes || []);
    const [dislikes, setDislikes] = useState(post.dislikes || []);
    const [isVoting, setIsVoting] = useState(false);

    const handleVote = async (type) => {
        if (isVoting) return;
        setIsVoting(true);
        const url = `${import.meta.env.VITE_API_URL}/api/v1/posts/${post._id}/${type}`;
        try {
            const response = await fetch(url, {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
            });

            if (response.ok) {
                const updatedPost = await response.json();
                setLikes(updatedPost.likes || []);
                setDislikes(updatedPost.dislikes || []);
            } else {
                console.error(`Failed to ${type} post`);
            }
        } catch (err) {
            console.error(`Error during ${type}:`, err);
        } finally {
            setIsVoting(false);
        }
    };

    return (
        <div className="bg-light dark:bg-dark/80 p-4 rounded-2xl shadow-md w-full border border-primary/20 mb-5">
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
                {post.author?.avatar ? (
                    <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                ) : (
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <User className="text-primary" size={20} />
                    </div>
                )}

                <div>
                    <h2 className="font-semibold">{post.author?.name || "Unknown"}</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                        {post.author?.role || "User"}
                    </p>
                </div>
            </div>

            {/* Content */}
            <p className="whitespace-pre-line text-black dark:text-white mb-4">
                {post.content}
            </p>

            {/* Images */}
            {post.image && Array.isArray(post.image) && post.image.length > 0 && (
                <div className="grid grid-cols-3 gap-3 mb-4">
                    {post.image.map((imgUrl, idx) => (
                        <img
                            key={idx}
                            src={imgUrl}
                            alt={`post-img-${idx}`}
                            className="rounded-xl object-cover w-full h-40"
                        />
                    ))}
                </div>
            )}

            {/* Footer */}
            <div className="flex items-center justify-between border-t pt-3 border-primary/30">
                <div className="flex items-center gap-2 text-primary">
                    <ArrowBigUp
                        className={`cursor-pointer hover:scale-110 transition ${isVoting ? "opacity-50 pointer-events-none" : ""
                            }`}
                        onClick={() => handleVote("like")}
                    />
                    <span>{likes.length - dislikes.length}</span>
                    <ArrowBigDown
                        className={`cursor-pointer hover:scale-110 transition ${isVoting ? "opacity-50 pointer-events-none" : ""
                            }`}
                        onClick={() => handleVote("dislike")}
                    />
                </div>
                <button className="bg-primary text-white px-4 py-1 rounded-xl hover:bg-primary/80">
                    Discuss
                </button>
            </div>
        </div>
    );
}
