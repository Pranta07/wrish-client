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
    Lock,
    MailOutline,
    Visibility,
    VisibilityOff,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({});
    const [show, setShow] = useState(false);
    const { handleSignIn, error, setError } = useAuth();

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
        console.log(name, newInfo);
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
        <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
        >
            <Grid item xs={12} sm={12} md={6}>
                <div>
                    <img
                        src="https://i.ibb.co/wwRxhYm/Mobile-login-pana.png"
                        alt=""
                        width="100%"
                        height="600"
                    />
                </div>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={6}
                sx={{ display: "flex", alignItems: "center" }}
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
                                            onClick={handleClickShowPassword}
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
                </Box>
            </Grid>
        </Grid>
    );
};

export default Login;
