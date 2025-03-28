import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Paper, List, ListItem, ListItemText, Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const fetchFeed = async () => {
    const { data } = await axios.get('http://20.244.56.144/test/users');
    let allPosts = [];

    for (const userId of Object.keys(data.users)) {
      const response = await axios.get(`http://20.244.56.144/test/users/${userId}/posts`);
      allPosts = allPosts.concat(response.data.posts);
    }

    allPosts.sort((a, b) => b.id - a.id);
    setPosts(allPosts);
  };

  useEffect(() => {
    fetchFeed();
    const interval = setInterval(fetchFeed, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
      <Typography variant="h5">Feed</Typography>
      <List>
        {posts.map((post, index) => (
          <ListItem key={index} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <ListItemText primary={post.content} />
            <Button 
              variant="contained" 
              onClick={() => navigate(`/posts/${post.id}/comments`)}
            >
              View Comments
            </Button>
          </ListItem>
        ))}
      </List>   
    </Paper>
  );
};

export default Feed;
