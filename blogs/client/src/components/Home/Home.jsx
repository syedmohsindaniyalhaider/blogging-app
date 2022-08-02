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

const Home = () => {
  // const [likeHeart, setLikeHeart] = useState(false);
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
      <Container maxWidth="sm" sx={{ marginTop: "-100px", minHeight: "85vh" }}>
        {blogs.map((item) => (
          <Card key={item.id} variant="outlined" sx={{ marginBottom: "50px" }}>
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
          </Card>
        ))}
      </Container>
    </>
  );
};

export default Home;
