import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch';
import useDeleteBlog from './DeleteBlog';



const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:7000/blogs/' + id);

    const deleteBlog = useDeleteBlog();
    const DeleteBlog = () => {
        deleteBlog(id);
        // onDelete(id)
    }

    return (

        <div className='blog-details'>
            {isPending && <div>Loading... </div>}
            {error && <div>{error.message}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>~Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={() => DeleteBlog(id)}>Delete</button>
                </article>
            )}
        </div>

    )
}

export default BlogDetails