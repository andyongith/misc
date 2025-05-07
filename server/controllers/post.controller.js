import Post from '../models/post.model.js';
import cloudinary from 'cloudinary';
import Notification from '../models/notification.model.js';

export const getFeedPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        .populate('author', 'name username profilePicture headline')
        .populate('likes', 'name username profilePicture headline')
        .populate('comments.user', 'name username profilePicture headline')
        .sort('-createdAt');

        res.status(200).json(posts);
    } catch (error) {
        console.error(error,"error in getFeedPosts controller");
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const createPost = async (req, res) => {
    try {
        const { content, image } = req.body;
        let newPost;

        if (image) {
            const imageResult = await cloudinary.uploader.upload(image);
            newPost = await Post.create({
                author: req.user._id,
                content,
                image: imageResult.secure_url
            });
        } else {
            newPost = await Post.create({
                author: req.user._id,
                content
            });
        }

        // Populate author before sending response
        await newPost.populate('author', 'name avatar role');

        res.status(201).json(newPost);
    } catch (error) {
        console.error(error, "error in createPost controller");
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const deletePost = async (req, res) => {
    try {
        const postId= req.params.id;
        const userId= req.user._id;

        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        if (post.author.toString() !== userId) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        if (post.image) {
            const publicId = post.image.split('/').pop().split('.')[0];
            await cloudinary.uploader.destroy(publicId);
        }

        await Post.findByIdAndDelete(postId);
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        console.error(error,"error in deletePost controller");
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const getPostById = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Post.findById(postId)
            .populate('author', 'name username profilePicture headline')
            .populate('likes', 'name username profilePicture headline')
            .populate('comments.user', 'name username profilePicture headline');

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        res.status(200).json(post);
    } catch (error) {
        console.error(error,"error in getPostById controller");
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const createComment = async (req, res) => {
    try {
        const postId = req.params.id;
        const { content } = req.body;

        const post = await Post.findByIdAndUpdate(
            postId,
            { $push: { comments: { user: req.user._id, content } } },
            { new: true }
        ).populate('author', 'name username profilePicture headline')
        
        //create a notification for the post author 
        if (post.author.toString() !== req.user._id.toString()) {
            const newNotification = new Notification({
                recipient: post.author,
                type: 'comment',
                relatedUser: req.user._id,
                relatedPost: post._id,
            });
            await newNotification.save();
        }

        
        res.status(201).json(post);

    } catch (error) {
        console.error(error,"error in createComment controller");
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const likePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const userId = req.user._id;

        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Remove dislike if it exists
        post.dislikes = post.dislikes.filter(id => id.toString() !== userId.toString());

        if (post.likes.includes(userId)) {
            // Toggle like off
            post.likes = post.likes.filter(id => id.toString() !== userId.toString());
        } else {
            // Add like
            post.likes.push(userId);

            // Create notification if it's not the user's own post
            // if (post.author.toString() !== userId.toString()) {
            //     const newNotification = new Notification({
            //         recipient: post.author,
            //         type: 'like',
            //         relatedUser: userId,
            //         relatedPost: post._id,
            //     });
            //     await newNotification.save();
            // }
        }

        await post.save();
        res.status(200).json(post);
    } catch (error) {
        console.error("Error in likePost controller:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const dislikePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const userId = req.user._id;

        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Remove like if it exists
        post.likes = post.likes.filter(id => id.toString() !== userId.toString());

        if (post.dislikes.includes(userId)) {
            // Toggle dislike off
            post.dislikes = post.dislikes.filter(id => id.toString() !== userId.toString());
        } else {
            // Add dislike
            post.dislikes.push(userId);
            // Optional: Add notification logic if desired
        }

        await post.save();
        res.status(200).json(post);
    } catch (error) {
        console.error("Error in dislikePost controller:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
