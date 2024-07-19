import Box from '@mui/joy/Box';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea';
import Snackbar from '@mui/joy/Snackbar';
import { useState } from 'react';
import { BASE_URL } from "../utils/utilities";
import Typography from '@mui/joy/Typography';

export default function CreateRecipie() {
    const [ recipieName, setRecipieName ] = useState("")
    const [ recipieDescription, setRecipieDescription ] = useState("")
    const [ showSnackBar, setShowSnackBar ] = useState(false)

    const handleNameChange = (event) => {
        setRecipieName(event.target.value)
    }

    const handleDescriptionChange = (event) => {
        setRecipieDescription(event.target.value)
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`${BASE_URL}/create/`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: recipieName, description: recipieDescription }),
              });
            setShowSnackBar(true);
            setRecipieName("");
            setRecipieDescription("");
          } catch (error) {
            console.error('Failed to create recipe:', error);
          }
       
    }

    const handleClear = (event) => {
        setRecipieDescription("");
        setRecipieName("");
    }

    return (
        <div style={{
            padding: "10px"
        }}>
            <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
                Create a New Recipie
            </Typography>
            <Typography>Here you can add your own recipies. Providing a unique name to a recipie gives it your identity. </Typography>
            <Box sx={{
                width: "500px",
                minWidth: "400px",
                marginTop: "20px"
            }}>
                <form onSubmit={handleFormSubmit}>
                    <Stack spacing={1}>
                        <Input onChange={handleNameChange} value={recipieName} variant="plain" placeholder='Enter Name' />
                        <Textarea 
                            onChange={handleDescriptionChange}
                            value={recipieDescription}
                            placeholder='Enter Description'
                            minRows='20'
                            maxRows='20'
                            variant="plain"
                        />
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}>
                            <Button sx={{ width: '150px' }} type="submit">Save</Button>
                            {(recipieName || recipieDescription) && <Button onClick={handleClear} variant="plain" sx={{ width: '150px' }}>Clear Form</Button>}
                        </div>
                        
                    </Stack>
                </form>
            </Box>
            <Snackbar
                autoHideDuration={3000}
                open={showSnackBar}
                variant='soft'
                color='success'
                onClose={(event, reason) => {
                  if (reason === 'clickaway') {
                    return;
                  }
                  setShowSnackBar(false);
                }}
                sx={{fontWeight: "500"}}
            >Recipie Saved</Snackbar>
        </div>
        
    )
}