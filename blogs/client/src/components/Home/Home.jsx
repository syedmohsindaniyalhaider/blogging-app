import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./style.module.css";
const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const response = await fetch("http://localhost:3001/blogs");
    const data = await response.json();
    console.log(data);
    setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      {blogs.map((item) => (
        <>
          <div key={item.id}>
            <strong>Title:</strong> {item.title}
          </div>
          <div>
            <strong>Sub Title:</strong> {item.subTitle}
          </div>
          <div>
            <strong>Paragraph:</strong> {item.paragraph}
          </div>
          <div>
            {item.blogImage && <img src={item.blogImage} height="100" />}
          </div>
        </>
      ))}
    </>
  );
};

export default Home;
