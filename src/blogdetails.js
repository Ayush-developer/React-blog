import { useParams } from "react-router-dom";
import useFetch from './useFetch';
import './blogdetails.css';
const BlogDetails = () => {
    const { id } = useParams();
    const { blogs, isPending, deleteBlog } = useFetch(`http://localhost:3000/blogs/${id}`);

    return ( 
        <div>
            <h1> Here the details for {id}</h1>
            {isPending && <h1>Loading .... </h1>}
            {blogs && 
                <article>
                    <h1>{blogs.title}</h1>
                    <h2>{blogs.author}</h2>
                    <p>{blogs.body}</p>
                </article>
            }
        </div>
    );
}

export default BlogDetails;
