import { useNavigate } from "react-router-dom";



const useDeleteBlog = (id) => {
    // const { id } = useParams();
    // const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();
    const DeleteBlog = (id) => {
        fetch('http://localhost:7000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            console.log('Blog deleted');
            navigate('/')
        })
    }
    return DeleteBlog;
}

export default useDeleteBlog