import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

const TopUsers = () => {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get('http://20.244.56.144/test/users');
      const userPosts = await Promise.all(Object.keys(data.users).map(async userId => {
        const res = await axios.get(`http://20.244.56.144/test/users/${userId}/posts`);
        return { name: data.users[userId], postCount: res.data.posts.length };
      }));

      userPosts.sort((a, b) => b.postCount - a.postCount);
      setTopUsers(userPosts.slice(0, 5));
    };

    fetchUsers();
  }, []);

  return (
    <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
      <Typography variant="h5">Top Users</Typography>
      <List>
        {topUsers.map((user, index) => (
          <ListItem key={index}>
            <ListItemText primary={`${user.name} - ${user.postCount} posts`} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TopUsers;
