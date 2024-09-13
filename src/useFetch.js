import { useState , useEffect } from "react";

const useFetch = (url) => {

        const [blogs,blogState] = useState(null);
        const [isPending, setIsPending] = useState(true);

        const deleteBlog = (id) => {
            const newBlogs = blogs.filter((blog) => blog.id !== id);
            blogState(newBlogs);
        };
    

        useEffect(()=>{
              fetch(url).then(
                res => {
                    return res.json();
                }
              ).then(data=>{
                blogState(data)
                setIsPending(false)
              })
              .catch(err => {
                console.error("Failed to fetch blogs:", err);
                setIsPending(false);  // Set to false even if there's an error
            });
             
            
        },[])

        return {blogs,isPending, deleteBlog};
    
}
 
export default useFetch;