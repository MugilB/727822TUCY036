import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Mugil's - Social Platform</Link>
                </Typography>
                <Box>
                    <Button color="inherit" component={Link} to="/">Feed</Button>
                    <Button color="inherit" component={Link} to="/top-users">Top Users</Button>
                    <Button color="inherit" component={Link} to="/trending-posts">Trending Posts</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
