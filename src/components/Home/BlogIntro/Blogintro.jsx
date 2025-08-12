import React, { useEffect, useState } from 'react';

const BlogIntro = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://your-backend-api.com/blogs?limit=3')
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h2>Latest Blogs</h2>
            <ul>
                {posts.length > 0 ? (
                    posts.map(post => (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.tag}</p>
                        </div>
                    ))
                ) : (
                    <div>No blogs found.</div>
                )}
            </ul>
        </div>
    );
};

export default BlogIntro;