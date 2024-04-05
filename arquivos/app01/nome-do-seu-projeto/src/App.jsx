import './App.css'
import  { useEffect, useState } from 'react';
// import NavBar from './components/NavBar';
import axios from 'axios';

export default function App() {

  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const client = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
  });

  useEffect(
    ()=>{
      const loadPost = async () => {
        setIsLoading(true);
        try{
          const response = await client.get('/1');
          setPost(response.data);
          setIsLoading(false);
        }catch(erro){
          setIsLoading(false);
          setError(true);
          console.log(erro);
        }
      }

      loadPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]
  );
  
  const cretePost = async () => {
    const response = await client.post('/' , {
      title: "Hello World!",
      body: "This is a new post."
    });

    setPost(response.data);
  }

  const updatePost = async () => {
    const response = await client.put('/1' , {
      title: 'Hello World',
      body: 'This is an updated post.'
    });

    setPost(response.data);
  }

  const deletePost = async () => {
    await client.delete('/1');
    alert('Post removed');
    setPost(null);
  }


  if(error) {
    return <p>Error</p>
  } else if(isLoading) return <p>Loading</p>

  if(!post) return <p>No post!</p>
 

  return (
    <div className='App'>
      <div className="post">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <button onClick={()=>cretePost()}>Create Post</button>
        <button onClick={()=>updatePost()}>Update Post</button>
        <button onClick={()=>deletePost()}>Delete Post</button>
      </div>
    </div>
  )
}