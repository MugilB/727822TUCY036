import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

const TrendingPosts = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      const { data } = await axios.get('http://20.244.56.144/test/users');
      const posts = [];

      for (const userId of Object.keys(data.users)) {
        const response = await axios.get(`http://20.244.56.144/test/users/${userId}/posts`);
        posts.push(...response.data.posts);
      }

      setTrendingPosts(posts.slice(0, 5)); 
    };

    fetchTrending();
  }, []);

  return (
    <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
      <Typography variant="h5">Trending Posts</Typography>
      <List>
        {trendingPosts.map((post, index) => (
          <ListItem key={index}>
            <ListItemText primary={post.content} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TrendingPosts;
