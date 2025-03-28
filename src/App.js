import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Feed from './pages/Feed';
import TopUsers from './pages/TopUsers';
import TrendingPosts from './pages/TrendingPosts';
import Comments from './components/Comments'; // Importing Comments Component
import { Container } from '@mui/material';

const App = () => {
    return (
        <>
            <Navbar />
            <Container sx={{ mt: 4 }}>
                <Routes>
                    <Route path="/" element={<Feed />} />
                    <Route path="/top-users" element={<TopUsers />} />
                    <Route path="/trending-posts" element={<TrendingPosts />} />
                    <Route path="/posts/:postId/comments" element={<Comments />} /> 
                </Routes>
            </Container>
        </>
    );
};

export default App;
