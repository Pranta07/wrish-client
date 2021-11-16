import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useHistory } from "react-router-dom";
const Navigation = () => {
    const { user, handleSignOut } = useAuth();
    const history = useHistory();

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
                    <img
                        src="https://i.ibb.co/m5bgWcG/logo.png"
                        alt=""
                        width="80"
                    />
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
                    {user.email && (
                        <Box sx={{ mr: 1 }}>
                            <Link
                                to="/dashboard"
                                style={{ textDecoration: "none" }}
                            >
                                <Button variant="contained">Dashboard</Button>
                            </Link>
                        </Box>
                    )}
                    {!user.email ? (
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
                    ) : (
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                            style={{
                                marginLeft: "auto",
                                marginRight: "5px",
                            }}
                        >
                            <Typography sx={{ typography: "body2" }}>
                                {user.displayName}
                            </Typography>
                            <Avatar
                                alt="Cindy Baker"
                                src={user.photoURL}
                                sx={{ mx: 1 }}
                            />
                            <Button
                                onClick={() => handleSignOut(history)}
                                variant="contained"
                            >
                                Logout
                            </Button>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;
