import { useState } from "react";
import { useEffect } from "react";
import useFetch  from './useFetch'
import Bloglist from "./Bloglist";

const Home = () => {

    const {blogs,isPending , deleteBlog} = useFetch('http://localhost:3000/blogs')

    return (
        <div className="Home">
             {isPending && <div> Loading </div>}
             {blogs && <Bloglist blogs={blogs} deleteBlog={deleteBlog}/>}
        </div>
    );
};

export default Home;
