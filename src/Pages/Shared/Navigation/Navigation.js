import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";

const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Avatar
                        alt="Example Alt"
                        src="https://i.ibb.co/7VrXhzF/149-1492017-download-watch-dogs-png-hd-watch-dogs-logo.png"
                    />
                    <Typography variant="h5">WRISH</Typography>
                    <Box sx={{ mx: 1 }}>
                        <Link to="/home" style={{ textDecoration: "none" }}>
                            <Button variant="contained">Home</Button>
                        </Link>
                    </Box>
                    <Box sx={{ mr: 1 }}>
                        <Link to="/watches" style={{ textDecoration: "none" }}>
                            <Button variant="contained">Watches</Button>
                        </Link>
                    </Box>
                    <Link
                        to="login"
                        style={{
                            textDecoration: "none",
                            marginLeft: "auto",
                            marginRight: "5px",
                        }}
                    >
                        <Button variant="contained">Login</Button>
                    </Link>
                    <AccountCircle />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;
