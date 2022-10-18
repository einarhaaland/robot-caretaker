import { AppBar, IconButton, Toolbar, Typography, Stack, Button } from "@mui/material"
import { SmartToy } from "@mui/icons-material";

const Navbar = () => {
    return (
        <AppBar position="static" sx={{bgcolor: "#3b3657"}}>
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                    <SmartToy />
                </IconButton>
                <Typography variant="h6" sx={{flexGrow: 1}}>
                    Robot Emotion Controller
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">How To Use</Button>
                    <Button color="inherit">Add Robot</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar