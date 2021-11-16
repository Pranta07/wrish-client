import * as React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    useHistory,
} from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Payment, Reviews, Shop, Watch } from "@mui/icons-material";
import MyOrders from "../MyOrders/MyOrders";
import useAuth from "../../../hooks/useAuth";
import RateUs from "../RateUs/RateUs";
import Pay from "../Pay/Pay";

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { handleSignOut } = useAuth();
    const history = useHistory();
    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <Link
                    to="/watches"
                    style={{ textDecoration: "none", color: "blueviolet" }}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <Watch></Watch>
                        </ListItemIcon>
                        <ListItemText primary="Watches" />
                    </ListItem>
                </Link>
                <Link
                    to={`${url}/pay`}
                    style={{ textDecoration: "none", color: "blueviolet" }}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <Payment></Payment>
                        </ListItemIcon>
                        <ListItemText primary="Pay" />
                    </ListItem>
                </Link>
                <Link
                    to={`${url}/myOrders`}
                    style={{ textDecoration: "none", color: "blueviolet" }}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <Shop></Shop>
                        </ListItemIcon>
                        <ListItemText primary="My Orders" />
                    </ListItem>
                </Link>
                <Link
                    to={`${url}/reviews`}
                    style={{ textDecoration: "none", color: "blueviolet" }}
                >
                    <ListItem button>
                        <ListItemIcon>
                            <Reviews></Reviews>
                        </ListItemIcon>
                        <ListItemText primary="Review" />
                    </ListItem>
                </Link>
            </List>
            <Divider />
            <Button onClick={() => handleSignOut(history)} variant="text">
                Logout
            </Button>
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Toolbar />
                {/* <MyOrders></MyOrders> */}
                <Switch>
                    <Route exact path={path}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/reviews`}>
                        <RateUs></RateUs>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    window: PropTypes.func,
};

export default Dashboard;
