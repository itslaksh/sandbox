// import { useState, useEffect } from "react";
import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import {motion} from 'framer-motion';


const Home = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:7000/blogs');
    // ♡⸜(˶˃ ᵕ ˂˶)⸝♡


    const [blogList, setBlogList] = useState([]);

    useEffect(() => {
        if (blogs) {
            setBlogList(blogs);
        }
    }, [blogs]);

    const removeBlog = (id) => {
        setBlogList(blogList.filter(blog => blog.id !== id));
    };

    return (
        <div className="home">
            {/* Using Props */}
            {error && <div> {error} </div>}
            {isPending && <div>Loading...</div>}
            {blogList && <BlogList blogs={blogList} title='All Blogs...'
                onDelete={removeBlog}
            />}
        </div>
    );
}

export default Home;