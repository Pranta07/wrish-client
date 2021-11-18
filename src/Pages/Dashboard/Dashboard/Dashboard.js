import * as React from "react";
import {
    Switch,
    Route,
    Link,
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
import { Avatar } from "@mui/material";
import {
    Add,
    AdminPanelSettings,
    Home,
    Logout,
    Payment,
    Reviews,
    Shop,
    Update,
    Watch,
} from "@mui/icons-material";
import MyOrders from "../MyOrders/MyOrders";
import useAuth from "../../../hooks/useAuth";
import RateUs from "../RateUs/RateUs";
import Pay from "../Pay/Pay";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddProduct from "../AddProduct/AddProduct";
import ManageProducts from "../ManageProducts/ManageProducts";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { handleSignOut, user } = useAuth();
    const history = useHistory();
    let { path, url } = useRouteMatch();
    const [admin, setAdmin] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    React.useEffect(() => {
        setLoading(true);
        fetch(`https://frozen-inlet-30875.herokuapp.com/users/${user.email}`)
            .then((res) => res.json())
            .then((user) => {
                if (user.role === "admin") setAdmin(true);
            })
            .finally(() => setLoading(false));
    }, [user.email]);

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            {!loading && (
                <List>
                    <Link
                        to="/home"
                        style={{
                            textDecoration: "none",
                            color: "blueviolet",
                        }}
                    >
                        <ListItem button>
                            <ListItemIcon>
                                <Home></Home>
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </Link>
                    <Link
                        to="/watches"
                        style={{
                            textDecoration: "none",
                            color: "blueviolet",
                        }}
                    >
                        <ListItem button>
                            <ListItemIcon>
                                <Watch></Watch>
                            </ListItemIcon>
                            <ListItemText primary="Watches" />
                        </ListItem>
                    </Link>
                    {!admin ? (
                        <Box>
                            <Link
                                to={`${url}/pay`}
                                style={{
                                    textDecoration: "none",
                                    color: "blueviolet",
                                }}
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
                                style={{
                                    textDecoration: "none",
                                    color: "blueviolet",
                                }}
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
                                style={{
                                    textDecoration: "none",
                                    color: "blueviolet",
                                }}
                            >
                                <ListItem button>
                                    <ListItemIcon>
                                        <Reviews></Reviews>
                                    </ListItemIcon>
                                    <ListItemText primary="Review" />
                                </ListItem>
                            </Link>
                        </Box>
                    ) : (
                        <Box>
                            <Link
                                to={`${url}/makeAdmin`}
                                style={{
                                    textDecoration: "none",
                                    color: "blueviolet",
                                }}
                            >
                                <ListItem button>
                                    <ListItemIcon>
                                        <AdminPanelSettings></AdminPanelSettings>
                                    </ListItemIcon>
                                    <ListItemText primary="Make Admin" />
                                </ListItem>
                            </Link>
                            <Link
                                to={`${url}/addProduct`}
                                style={{
                                    textDecoration: "none",
                                    color: "blueviolet",
                                }}
                            >
                                <ListItem button>
                                    <ListItemIcon>
                                        <Add></Add>
                                    </ListItemIcon>
                                    <ListItemText primary="Add Item" />
                                </ListItem>
                            </Link>
                            <Link
                                to={`${url}/manageProducts`}
                                style={{
                                    textDecoration: "none",
                                    color: "blueviolet",
                                }}
                            >
                                <ListItem button>
                                    <ListItemIcon>
                                        <Watch></Watch>
                                    </ListItemIcon>
                                    <ListItemText primary="Manage Products" />
                                </ListItem>
                            </Link>
                            <Link
                                to={`${url}/manageOrders`}
                                style={{
                                    textDecoration: "none",
                                    color: "blueviolet",
                                }}
                            >
                                <ListItem button>
                                    <ListItemIcon>
                                        <Update></Update>
                                    </ListItemIcon>
                                    <ListItemText primary="Manage Orders" />
                                </ListItem>
                            </Link>
                        </Box>
                    )}
                </List>
            )}
            <Divider />
            <ListItem onClick={() => handleSignOut(history)}>
                <ListItemIcon>
                    <Logout></Logout>
                </ListItemIcon>
                <ListItemText>Logout</ListItemText>
            </ListItem>
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    const style = {
        backgroundImage: `url("https://i.ibb.co/Xz5cDKh/salvador-escalante-Efjlkpo-Gjs4-unsplash.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
    };

    return (
        <Box
            style={style}
            sx={{
                display: "flex",
                height: {
                    xs: "100%!important",
                    sm: "100%!important",
                    md: "100vh!important",
                },
            }}
        >
            {/* <CssBaseline /> */}
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    p: 1,
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
                    <Avatar
                        alt="Cindy Baker"
                        src={user.photoURL}
                        sx={{ mx: 1 }}
                    />
                    <Typography
                        sx={{ typography: "body2", textAlign: "right" }}
                    >
                        {user.displayName}
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
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    py: 4,
                    px: { xs: 1, sm: 2, md: 3 },
                }}
            >
                <Toolbar />
                <Switch>
                    {!loading && (
                        <Route exact path={path}>
                            {!admin ? <MyOrders></MyOrders> : <MakeAdmin />}
                        </Route>
                    )}
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/reviews`}>
                        <RateUs></RateUs>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </Route>
                    <Route path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                    <Route path={`${path}/manageOrders`}>
                        <ManageAllOrders></ManageAllOrders>
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
