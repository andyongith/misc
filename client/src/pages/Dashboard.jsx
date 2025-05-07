import PageBase from "../components/PageBase";
import Forum from "../components/Forum";
import CreatePostModal from "../components/CreatePostModal";
import { useEffect, useState } from "react";
import { Pencil } from "lucide-react"; // You can replace this or use any pen SVG

const API_URL = import.meta.env.VITE_API_URL;

export default function Dashboard() {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`${API_URL}/api/v1/posts`, {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) throw new Error("Failed to fetch posts.");
                const data = await response.json();
                setPosts(data);
            } catch (err) {
                console.error("Error fetching posts:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const handlePostCreated = (newPost) => {
        setPosts((prev) => [newPost, ...prev]);
    };

    return (
        <PageBase>
            {loading && <p>Loading posts...</p>}
            {error && <p>Error: {error}</p>}
            {posts && <Forum posts={posts} />}

            {/* Floating Pen Button */}
            <button
                onClick={() => setShowModal(true)}
                className="fixed bottom-6 right-6 bg-purple-700 text-white p-4 rounded-full shadow-lg hover:bg-purple-800 z-40"
                title="Create Post"
            >
                <Pencil size={24} />
            </button>

            {showModal && (
                <CreatePostModal
                    onClose={() => setShowModal(false)}
                    onPostCreated={handlePostCreated}
                />
            )}
        </PageBase>
    );
}
