import React, { useEffect, useState } from "react";
import "./ListaPost.css";
import Post from "./Post";

function ListaPost() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((res) => setPosts(res));
    });
    return (
        <div className="lista-post">
            {posts.map((post) => (
                <div className="style-post">
                    <Post
                        texto={post.body}
                        nombre={post.title}
                        imagen="https://static.platzi.com/media/learningpath/badges/b1024d96-eebe-4301-a3e4-df75daed2548.jpg"
                    />
                </div>
            ))}
        </div>
    );
}

export default ListaPost;
