import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
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
      <div className={styles.categories}>
        <ul className={styles.list}>
          <li className={styles.listHead}>
            <strong>Categories</strong>
          </li>
          <li className={styles.item}>
            <Link to="">All</Link>
          </li>
          <li className={styles.item}>
            <Link to="">Latest</Link>
          </li>
          <li className={styles.item}>
            <Link to="">Popular</Link>
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        {blogs.map((item) => (
          <div key={item.id} className={styles.card}>
            {item.blogImage && (
              <img src={item.blogImage} className={styles.image} />
            )}
            <div className={styles.cardContent}>
              <div>
                <strong>Title:</strong> {item.title}
              </div>
              <div>
                <strong>Sub Title:</strong> {item.subTitle}
              </div>
              <div>
                <strong>Paragraph:</strong> {item.paragraph}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
