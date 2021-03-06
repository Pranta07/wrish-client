import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import useAuth from "../../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";
import {
    Alert,
    Button,
    FormControl,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    TextField,
} from "@mui/material";
import {
    Google,
    Lock,
    MailOutline,
    Visibility,
    VisibilityOff,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import Page from "../../Page/Page";

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({});
    const [show, setShow] = useState(false);
    const { handleSignIn, handleGoogleSignIn, error, setError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        handleSignIn(loginInfo.email, loginInfo.password, location, history);
    };

    const handleChange = (e) => {
        const newInfo = { ...loginInfo };
        const name = e.target.name;
        newInfo[name] = e.target.value;
        setLoginInfo(newInfo);
        // console.log(name, newInfo);
    };

    const handleClickShowPassword = () => {
        setShow(!show);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleClose = () => {
        setError("");
    };

    return (
        <Page title="Login">
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 4, md: 12 }}
            >
                <Grid item xs={4} sm={2} md={6}>
                    <div>
                        <img
                            src="https://i.ibb.co/wwRxhYm/Mobile-login-pana.png"
                            alt=""
                            width="100%"
                        />
                    </div>
                </Grid>
                <Grid
                    item
                    xs={4}
                    sm={2}
                    md={6}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            border: "1px solid gray",
                            borderRadius: "5px",
                            padding: "10px",
                            m: 3,
                        }}
                    >
                        <form onSubmit={handleLoginSubmit}>
                            <h2>Sign in</h2>
                            <TextField
                                required
                                onBlur={handleChange}
                                label="Email"
                                name="email"
                                variant="standard"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <MailOutline></MailOutline>
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{ width: "60%", my: 1 }}
                            />
                            <FormControl
                                sx={{ width: "60%", my: 1 }}
                                variant="standard"
                                required
                            >
                                <InputLabel htmlFor="standard-adornment-password">
                                    Password
                                </InputLabel>
                                <Input
                                    name="password"
                                    type={show ? "text" : "password"}
                                    // value={values.password}
                                    onBlur={handleChange}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <Lock></Lock>
                                        </InputAdornment>
                                    }
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={
                                                    handleClickShowPassword
                                                }
                                                onMouseDown={
                                                    handleMouseDownPassword
                                                }
                                            >
                                                {show ? (
                                                    <Visibility />
                                                ) : (
                                                    <VisibilityOff />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </form>
                        {error.length > 0 && (
                            <Alert onClose={handleClose} severity="error">
                                {error}!
                            </Alert>
                        )}
                        <Button
                            type="submit"
                            onClick={handleLoginSubmit}
                            variant="contained"
                            sx={{ px: 5, my: 2 }}
                        >
                            Sign in
                        </Button>
                        <br />
                        <Link to="/register" style={{ textDecoration: "none" }}>
                            <Button variant="text" sx={{ px: 5 }}>
                                Create An Acount
                            </Button>
                        </Link>
                        <br />
                        <Box
                            sx={{
                                letterSpacing: 2,
                                lineHeight: "normal",
                                fontSize: "small",
                            }}
                        >
                            .......or Sign-up with.......
                        </Box>
                        <Button
                            onClick={() =>
                                handleGoogleSignIn(location, history)
                            }
                            variant="text"
                            sx={{ px: 5, my: 1 }}
                        >
                            <Google></Google>
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Page>
    );
};

export default Login;
