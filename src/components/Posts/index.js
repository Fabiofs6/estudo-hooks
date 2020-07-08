import React, { useState, useEffect } from "react";
import Post from "../Post";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [texto, setTexto] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
      response.json().then((data) => {
        setPosts(data);
      });
    });
  }, []);

  function chamaAlerta(id) {
    alert(id)
  }

  return (
    <>
      <input onChange={e => setTexto(e.target.value)} value={texto}/>
      <ul>
        {posts.map((post) => (
          <Post key={post.id} post={post} chamaAlerta={chamaAlerta}/>
        ))}
      </ul>
    </>
  );
}
