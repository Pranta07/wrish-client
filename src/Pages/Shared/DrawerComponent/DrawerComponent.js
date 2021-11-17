import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import {
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import {
    Home,
    Login,
    Logout,
    Person,
    Watch,
    Dashboard,
} from "@mui/icons-material";

function DrawerComponent() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const { user, handleSignOut } = useAuth();
    const history = useHistory();

    return (
        <>
            <IconButton
                sx={{ ml: "auto" }}
                onClick={() => setOpenDrawer(!openDrawer)}
            >
                <MenuIcon></MenuIcon>
            </IconButton>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <Home></Home>
                        </ListItemIcon>
                        <ListItemText>
                            <Link
                                to="/"
                                style={{
                                    textDecoration: "none",
                                    color: "blueviolet",
                                }}
                            >
                                Home
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <Watch></Watch>
                        </ListItemIcon>
                        <ListItemText>
                            <Link
                                to="/watches"
                                style={{
                                    textDecoration: "none",
                                    color: "blueviolet",
                                }}
                            >
                                Watches
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <Dashboard></Dashboard>
                        </ListItemIcon>
                        <ListItemText>
                            <Link
                                to="/dashboard"
                                style={{
                                    textDecoration: "none",
                                    color: "blueviolet",
                                }}
                            >
                                Dashboard
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />

                    {!user.email ? (
                        <ListItem onClick={() => setOpenDrawer(false)}>
                            <ListItemIcon>
                                <Login></Login>
                            </ListItemIcon>
                            <ListItemText>
                                <Link
                                    to="login"
                                    style={{
                                        textDecoration: "none",
                                        color: "blueviolet",
                                    }}
                                >
                                    Login
                                </Link>
                            </ListItemText>
                        </ListItem>
                    ) : (
                        <ListItem onClick={() => setOpenDrawer(false)}>
                            <ListItemIcon>
                                <Person></Person>
                            </ListItemIcon>
                            <ListItemText>{user.displayName}</ListItemText>
                        </ListItem>
                    )}
                    {user.email && (
                        <ListItem onClick={() => handleSignOut(history)}>
                            <ListItemIcon>
                                <Logout></Logout>
                            </ListItemIcon>
                            <ListItemText>Logout</ListItemText>
                        </ListItem>
                    )}
                </List>
            </Drawer>
        </>
    );
}
export default DrawerComponent;
