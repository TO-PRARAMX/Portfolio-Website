import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Layout from '../Layout/Layout';
import { useParams } from 'react-router-dom';

const markdownFiles = import.meta.glob("../../assets/posts/*.md", { eager: true, as: "raw" });

const Posts = Object.entries(markdownFiles).map(file => matter(file[1]))

const PostPage = () => {

    const { slug } = useParams();
    console.log(slug)
    const post = Posts.find( p => p.data.slug === slug);

    if (!post) return <h2>Post not found</h2>

    return (
        <ReactMarkdown>
            {post.content}
        </ReactMarkdown>
    )
}

export {Posts, PostPage};