import { useState, useEffect } from "react";
import { Post } from "./Post";
import { Form } from "./Form";

import React from "react";

export default function Posts() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState(
    localStorage.getItem("POSTS")
      ? JSON.parse(localStorage.getItem("POSTS"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("POSTS", JSON.stringify(posts));
  }, [posts]);

  function handleAdd() {
    if (!content || !title) return;
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth();
    const date = d.getDate();
    const hour = d.getHours();
    const minutes = d.getMinutes();
    setPosts([
      {
        id: crypto.randomUUID(),
        title: title,
        content: content,
        replay: [],
        date: `${year}/${month + 1}/${date} ${hour}:${minutes}`,

      },
      ...posts,
    ]);
    setTitle("");
    setContent("");
  }

  function handleDeletePost(id) {
    setPosts((posts) => posts.filter((post) => post.id !== id));
  }

  return (
    <>
      <Form
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        handleAdd={handleAdd}
      />

      <hr />

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-10">
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            date={post.date}
            content={post.content}
            handleDeletePost={handleDeletePost}
          />
        ))}
      </div>
    </>
  );
}
