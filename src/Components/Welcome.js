import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Welcome() {
    return (
        <Container>
            <Box sx={{ textAlign: 'center', margin: '20px 0' }}>
                <Typography variant="h2" component="h1" gutterBottom>
                    Welcome to RecipiesApp
                </Typography>
                <Typography variant="h5" component="p" gutterBottom>
                    Discover and create amazing recipes.
                </Typography>
                <Grid container spacing={3} sx={{ marginTop: '20px' }}>
                    <Grid item xs={12} sm={6}>
                        <Button
                            component={Link}
                            to="/create"
                            variant="contained"
                            color="primary"
                            sx={{ width: '100%', padding: '10px' }}
                        >
                            Create a New Recipe
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button
                            component={Link}
                            to="/recipies"
                            variant="outlined"
                            color="primary"
                            sx={{ width: '100%', padding: '10px' }}
                        >
                            View All Recipes
                        </Button>
                    </Grid>
                </Grid>
                <div style={{marginTop: "50px"}}>
                    <Typography variant="h5" component="p" gutterBottom>
                        Designed and Developed by &nbsp;
                        <Typography variant="soft" color="primary" noWrap>
                            Siddhi Jadhav
                        </Typography>
                    </Typography>
                </div>
            </Box>
        </Container>
    );
}