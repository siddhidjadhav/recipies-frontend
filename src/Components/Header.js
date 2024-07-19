import Box from "@mui/joy/Box"
import List from "@mui/joy/List"
import ListItem from "@mui/joy/ListItem"
import ListItemButton from "@mui/joy/ListItemButton"
import ListDivider from "@mui/joy/ListDivider"
import { Link } from "react-router-dom"
import Typography from "@mui/joy/Typography"

export default function Header() {
    return (
        <div 
          component="nav" 
          aria-label="My site" 
          style={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            background: "#ffffff",
            zIndex: "100",
            height: "50px",
            width: "80%",
            margin: "auto"
          }}
        >
          
          <List role="menubar" orientation="horizontal">
          <ListItem role="none">
              <Link 
                style={{
                  textDecoration:"none",
                  color: "#000000"
                }} 
                to="/"
              ><Typography variant="plain" sx={{borderBottom: "1px solid black"}}>The Recipies App</Typography></Link>
            </ListItem>
            <ListDivider />
            <ListItem role="none">
              <Link 
                style={{
                  textDecoration:"none",
                  color: "#000000"
                }} 
                to="/recipies"
              >All Recipies</Link>
            </ListItem>
            <ListDivider />
            <ListItem role="none">
              <Link 
                  style={{
                    textDecoration:"none",
                    color: "#000000"
                  }} 
                to="/create"
              >Create</Link>
            </ListItem>
            </List>
        </div>
    )
}