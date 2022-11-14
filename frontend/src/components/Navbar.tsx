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
                    <Button color="inherit" target="_blank" href="https://github.com/einarhaaland/robot-caretaker">About</Button>
                    <Button color="inherit" target="_blank" href="https://github.com/einarhaaland/robot-caretaker#how-to-use">How To Use</Button>
                    <Button color="inherit" target="_blank" href="https://github.com/einarhaaland/robot-caretaker#adding-a-new-robot">Add Robot</Button>
                    <Button color="inherit" href="/add-motion">Add Motion</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar