import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import {LinearProgress} from '@mui/material';
import Input from '@mui/joy/Input';
import { useState, useEffect } from 'react';
import Box from '@mui/joy/Box';
import { useNavigate } from 'react-router-dom'; 


export default function RecipiesList({ recipies, isloading }) {
    const [filteredRecipies, setFilteredRecipies] = useState([...recipies]);
    const [searchText, setSearchText] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        setFilteredRecipies(
            recipies.filter(item =>
                item.name.toLowerCase().includes(searchText.toLowerCase())
            )
        );
    }, [searchText, recipies]);

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    }

    const handleCardClick = (id) => {
        navigate(`/recipies/${id}`); // Use navigate to go to recipe details
    };

    if(isloading) {
        return <LinearProgress />
    }

    return (
        <div>
            <Box >
                <Input
                    placeholder="Search anything"
                    type="search"
                    variant='plain'
                    sx={{
                        '&:focus': {
                            outline: "none",
                            boxShadow: "none",
                            cursor: 'pointer'
                        },
                        
                    }}
                    value = {searchText}
                    onChange={handleSearch}
                />
            </Box>
            
            {filteredRecipies.length!==0 && <div style={{
                 height: "600px",
                 overflow: "scroll",
                 marginTop: "20px",
            }}>
                {filteredRecipies.map(item => {
                    console.log(item)
                    return (
                        <Card sx={{
                            background: "transparent", 
                            borderBottom: "1px solid gray", 
                            cursor: "pointer"
                        }} 
                        variant="plain" 
                        key={item.id}
                        onClick={() => handleCardClick(item.id)}
                        >
                            <CardContent>
                                <Typography level="title-md">{item.name}</Typography>
                                <Typography>{item.description}</Typography>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>}
            
            {(searchText && filteredRecipies.length===0) && <div style={{
                padding: "20px"
            }}><Typography variant="plain" color="danger">
    No Matching Records
  </Typography></div>}
        </div>
    )
}