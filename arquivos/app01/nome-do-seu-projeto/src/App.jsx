import './App.css'
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import axios from 'axios';

export default function App() {

  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(
    ()=>{
      const loadPost = () => {
        setIsLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
          .then(response => {
            setPost(response.data)
            setIsLoading(false);
          })
          .catch(response => {
            setIsLoading(false);
            setError(true);
            console.log(response)
          })
      }

      loadPost();
    },[]
  );
  
  const cretePost = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts',{
      title: "Hello World!",
      body: "This is a new post."
    })
      .then((response) => {
        setPost(response.data);
      })
  }

  if(error) {
    return <p>Error</p>
  } else if(isLoading) return <p>Loading</p>
 

  return (
    <div className='App'>
      <div className="post">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <button onClick={()=>cretePost()}>Create Post</button>
      </div>
    </div>
  )
}