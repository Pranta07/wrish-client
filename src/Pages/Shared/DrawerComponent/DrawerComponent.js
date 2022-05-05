import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
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
    Menu,
    Login,
    Logout,
    Person,
    Watch,
    Dashboard,
    ContactPage,
    Description,
    // Article,
} from "@mui/icons-material";
import useAuth from "../../../hooks/useAuth";

const publicListItems = [
    { name: "Home", icon: <Home></Home>, to: "/" },
    { name: "Watches", icon: <Watch></Watch>, to: "/watches" },
    // { name: "Blogs", icon: <Article></Article>, to: "/blogs" },
    { name: "About Us", icon: <Description></Description>, to: "/about" },
    { name: "Contact", icon: <ContactPage></ContactPage>, to: "/contact" },
];

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
                <Menu></Menu>
            </IconButton>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List>
                    {publicListItems.map((item) => (
                        <ListItem onClick={() => setOpenDrawer(false)}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText>
                                <Link
                                    to={item.to}
                                    style={{
                                        textDecoration: "none",
                                        color: "blueviolet",
                                        fontFamily: "monospace",
                                        fontSize: 18,
                                    }}
                                >
                                    {item.name}
                                </Link>
                            </ListItemText>
                        </ListItem>
                    ))}

                    {user.email && (
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
                                        fontFamily: "monospace",
                                        fontSize: 18,
                                    }}
                                >
                                    Dashboard
                                </Link>
                            </ListItemText>
                        </ListItem>
                    )}
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
                                        fontFamily: "monospace",
                                        fontSize: 18,
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
