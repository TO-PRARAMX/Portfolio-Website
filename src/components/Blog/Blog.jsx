import React, { Profiler } from 'react';
import Layout from '../Layout/Layout';
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom';
import {Posts, PostPage} from './Post'
import './Blog.css'
import Profile from '../../assets/images/Profile.png';


const Blog = () => {
    return (
        <>
        <div className="blog__container">
            <h1 className="blog__header">All Blogs</h1>
            <div className="blog__list">
                {Posts.map(post => BlogCard(post))}
            </div>
        </div>
        </>
    );
};

const BlogCard = (post) => {
    const relativePath = `../../assets/${(post.data.img).replace("../", "")}`
    console.log(relativePath)
    const imageUrl = new URL(relativePath, import.meta.url).href;
    return (
        <Link to={`/blog/${post.data.slug}`} className="blog__card" key={post.data.slug}>
            <img src={imageUrl}></img>
            <div className="blog__card__content">
            <h1>{post.data.title}</h1>
            <p>{post.data.date}</p>
            <div className="blog__card__tags">
                {post.data.tags.map((t, index) => (
                    <Tag key={index} name={t}/>
                ))}
            </div>
            </div>
        </Link>
    )
}

const Tag = ({ name }) => {
    return (
        <div className="blog__tag">{name}</div>
    )
}

export default Blog;