import { Link } from 'react-router-dom'
import './wow.css'
const Bloglist = ({blogs , deleteBlog}) => {

    return (
        <div>
            <h1>React Blog</h1>
            {blogs.map((blog) => (
                <div className="Names" key={blog.id}>
                    <h1>{blog.title}</h1>
                   <Link to = {`/blogs/${blog.id}`}>
                   <h2>{blog.author}</h2>
                   <p>{blog.body}</p></Link>

                    <button onClick={()=>deleteBlog(blog.id)}>Delete</button>
                </div>
                
            ))}
        </div>
    );
}
 
export default Bloglist;
