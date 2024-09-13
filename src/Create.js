import { toBeRequired } from '@testing-library/jest-dom/matchers';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './createblog.css'

const Create = () => {
      const [title,setTitle] = useState()
      const [body,setBody] = useState()
      const [author,setAuthor] = useState()
      const navigate = useNavigate();

      const handleSubmit =(prac)=>{
        prac.preventDefault()
        const data =  {title, body , author} 
        fetch('http://localhost:3000/blogs',{
            method: 'POST',
            body:JSON.stringify(data)

        }).then(()=>{
            console.log(body)
            navigate('/')
        })
      }


    return ( 
        <div className="form">
            <form onSubmit= {handleSubmit}>
                <label>Title</label>
               <input 
    
               value = {title} 
               onChange={(e)=>{setTitle(e.target.value)}}


               ></input>

<label>Body</label>
               <textarea

               value = {body} 
               onChange={(e)=>{setBody(e.target.value)}}
               

               ></textarea>

<label>Author</label>
               <input 
 
               value = {author} 
               onChange={(e)=>{setAuthor(e.target.value)}}
               

               ></input>
               <button> Submit </button>

        </form>
        </div>
     );
}
 
export default Create;