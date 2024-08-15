import React from 'react';
import binImage from './bin.png';
import { Link } from 'react-router-dom';
import useDeleteBlog from './DeleteBlog';


const BlogList = ({ blogs, title, onDelete }) => {

    const deleteBlog = useDeleteBlog();
    const DeleteBlog = (id) => {
        deleteBlog(id);
        onDelete(id)
    }



    return (
        <div className="blog-list">
            <h2 className="title">{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <sub>~by {blog.author}</sub>
                        <p>{blog.subtitle}</p>
                    </Link>
                    <img src={binImage} alt='Bin' onClick={() => DeleteBlog(blog.id)} />
                </div>
            ))}
        </div>
    );
}

export default BlogList;