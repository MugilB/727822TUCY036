import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, List, ListItem, ListItemText, Container } from '@mui/material';

const Comments = ({ postId }) => {
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(`http://20.244.56.144/test/posts/${postId}/comments`);
                setComments(response.data.comments);
            } catch (err) {
                setError('Failed to load comments');
            }
        };

        if (postId) fetchComments(); // Fetch comments only if postId is available
    }, [postId]);

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    return (
        <Container>
            <Typography variant="h5" gutterBottom>Comments</Typography>
            <List>
                {comments.map(comment => (
                    <ListItem key={comment.id}>
                        <ListItemText primary={comment.content} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default Comments;
