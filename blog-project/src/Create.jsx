import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Anonymous');
    const [isPublished, setIsPublished] = useState(false);
    const navHome = useNavigate();


    const blogSubmit = (e) => {
        e.preventDefault();

        setIsPublished(true);

        const newBlog = {
            title: title,
            body: body,
            author: author
        }

        fetch(`http://localhost:7000/blogs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBlog)
        }).then(() => {
            console.log('Blog created')
            setIsPublished(false);
            navHome('/');
        })
    }

    return (
        <div className="create">
            <h2>Create a New Blog</h2>
            <form onSubmit={blogSubmit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    name="title"
                    spellCheck="false"
                    required
                    placeholder="Enter your blog title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <label>Blog Content:</label>
                <textarea
                    name="content"
                    spellCheck="false"
                    required
                    placeholder="Enter your blog content"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}

                />
                <br />
                <label> Author:</label>
                <input
                    type="text"
                    name="title"
                    spellCheck="false"
                    placeholder="Enter the Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                {!isPublished && <button>Create!</button>}
                {isPublished && <button disabled>Creating Blog...</button>}
            </form>
        </div>
    );
}

export default Create;