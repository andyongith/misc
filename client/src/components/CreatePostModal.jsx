import { useState } from "react";

export default function CreatePostModal({ onClose, onPostCreated }) {
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async () => {
        if (!content.trim()) return setError("Post content is required.");
        setLoading(true);
        setError("");

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/posts`, {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ content, image }),
            });

            if (!response.ok) throw new Error("Failed to create post");

            const data = await response.json();
            onPostCreated(data); // callback to update UI
            onClose(); // close modal
        } catch (err) {
            console.error(err);
            setError("Something went wrong while creating the post.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl w-[90%] max-w-lg shadow-lg relative">
                <button onClick={onClose} className="absolute top-3 right-4 text-xl font-bold">×</button>

                <h2 className="text-xl font-bold mb-4">Create a Post</h2>

                <textarea
                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-xl mb-3 resize-none"
                    rows={4}
                    placeholder="What's on your mind?"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>

                <input type="file" accept="image/*" onChange={handleImageChange} className="mb-2" />

                {image && (
                    <img src={image} alt="Preview" className="max-h-48 rounded-lg mb-2 object-cover" />
                )}

                {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full py-2 px-4 bg-purple-700 text-white rounded-xl hover:bg-purple-800 transition"
                >
                    {loading ? "Posting..." : "Post"}
                </button>
            </div>
        </div>
    );
}
