// import heart from "../../heart.png";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { Container } from "@mui/system";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { OutlinedInput } from "@mui/material";

const Home = () => {
  // const [likeHeart, setLikeHeart] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [comment, setComment] = useState("");
  const fetchBlogs = async () => {
    const response = await fetch("http://localhost:3001/blogs");
    const data = await response.json();
    console.log(data);
    setBlogs(data);
  };

  const comments = {
    comment: comment,
  };
  const commentsHTTP = async (blogId) => {
    await fetch(`http://localhost:3001/${blogId}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comments),
    }).catch((err) => console.error(err));
    await fetch(`http://localhost:3001/${blogId}/comments`).catch((err) =>
      console.error(err)
    );
    setComment("");
  };

  const handleComments = (blogId) => {
    comments.blogId = blogId;
    commentsHTTP(blogId);
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
      <Container maxWidth="sm" sx={{ marginTop: "-100px", minHeight: "85vh" }}>
        {blogs.map((item) => (
          <Card key={item._id} variant="outlined" sx={{ marginBottom: "50px" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              image={item.blogImage}
              alt="Paella dish"
              height="400"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton>
                <FavoriteIcon />
              </IconButton>
              <IconButton>
                <ShareIcon />
              </IconButton>
            </CardActions>
            <CardContent>
              <OutlinedInput
                placeholder="Enter a comment..."
                value={comment}
                onKeyUp={(e) => e.key === "Enter" && handleComments(item._id)}
                onChange={(e) => setComment(e.target.value)}
                fullWidth
              />
            </CardContent>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default Home;
