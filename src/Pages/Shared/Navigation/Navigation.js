import React from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Login } from "@mui/icons-material";
import DrawerComponent from "../DrawerComponent/DrawerComponent";
import {
    Avatar,
    CssBaseline,
    IconButton,
    useMediaQuery,
    useTheme,
} from "@mui/material";

const Navigation = () => {
    const { user, handleSignOut } = useAuth();
    const history = useHistory();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box>
            <AppBar position="static">
                <CssBaseline />
                <Toolbar>
                    <Avatar
                        alt="Example Alt"
                        src="https://i.ibb.co/7VrXhzF/149-1492017-download-watch-dogs-png-hd-watch-dogs-logo.png"
                    />
                    <img
                        src="https://i.ibb.co/m5bgWcG/logo.png"
                        alt=""
                        width="80"
                    />

                    {isMobile ? (
                        <DrawerComponent />
                    ) : (
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                // border: "1px solid red",
                                width: "100%",
                            }}
                        >
                            <Box sx={{ mx: 2 }}>
                                <Link
                                    to="/home"
                                    style={{
                                        textDecoration: "none",
                                        color: "white",
                                    }}
                                >
                                    Home
                                </Link>
                            </Box>
                            <Box sx={{ mx: 1 }}>
                                <Link
                                    to="/watches"
                                    style={{
                                        textDecoration: "none",
                                        color: "white",
                                    }}
                                >
                                    Watches
                                </Link>
                            </Box>
                            {user.email && (
                                <Box sx={{ mx: 1 }}>
                                    <Link
                                        to="/dashboard"
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                        }}
                                    >
                                        Dashboard
                                    </Link>
                                </Box>
                            )}
                            {!user.email ? (
                                <Box
                                    sx={{
                                        mr: 3,
                                        ml: "auto",
                                    }}
                                >
                                    <Link
                                        to="login"
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                        }}
                                    >
                                        <IconButton>
                                            <Login></Login>
                                        </IconButton>
                                        Login
                                    </Link>
                                </Box>
                            ) : (
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        ml: "auto",
                                        mr: 3,
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
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;
