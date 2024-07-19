// RecipeDetails.js
import React, { useState, useEffect } from 'react';
import { getRecipeById } from '../utils/utilities';
import { Container, Typography, Paper, Button, Box, Divider, List, ListItem, ListItemText, CircularProgress, LinearProgress } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

const RecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const data = await getRecipeById(id);
                console.log(data)
                setRecipe(data);
            } catch (error) {
                setError('Failed to fetch recipe');
            } finally {
                setIsLoading(false);
            }
        };

        fetchRecipe();
    }, [id]);

    if (isLoading) return <LinearProgress />;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <Container maxWidth="md" sx={{marginTop: "40px"}}>
            <Paper elevation={3} sx={{ padding: 2, marginBottom: 3 }}>
                <Typography variant="h3" gutterBottom>
                    {recipe.name}
                </Typography>
                <Typography variant="h6" color="textSecondary" paragraph>
                    {recipe.description}
                </Typography>
                {recipe.image && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
                        <img src={recipe.image} alt={recipe.name} style={{ maxWidth: '100%', borderRadius: '8px' }} />
                    </Box>
                )}
                <Divider sx={{ marginY: 3 }} />
                {/* You can add ingredients and instructions here if needed */}
                
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 3 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => navigate('/recipies')} // Use navigate to go back to the recipe list
                    >
                        Back to Recipe List
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default RecipeDetails;
