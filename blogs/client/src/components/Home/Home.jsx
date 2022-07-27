import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
// import heart from "../../heart.png";
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
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

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
      <Container maxWidth="sm">
        <List component="nav" aria-label="mailbox folders">
          <ListItem button>
            <ListItemText primary="Inbox" />
          </ListItem>
          <Divider />
          <ListItem button divider>
            <ListItemText primary="Drafts" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
          <Divider light />
          <ListItem button>
            <ListItemText primary="Spam" />
          </ListItem>
        </List>
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
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
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
