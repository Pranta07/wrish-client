import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import useAuth from "../../../hooks/useAuth";
import { useHistory } from "react-router";
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
    Person,
    Visibility,
    VisibilityOff,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Register = () => {
    const [registerInfo, setRegisterInfo] = useState({});
    const [show, setShow] = useState(false);
    const { handleRegister, handleGoogleSignIn, error, setError } = useAuth();

    const history = useHistory();

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        handleRegister(
            registerInfo.name,
            registerInfo.email,
            registerInfo.password,
            history
        );
    };

    const handleChange = (e) => {
        const newInfo = { ...registerInfo };
        const name = e.target.name;
        newInfo[name] = e.target.value;
        setRegisterInfo(newInfo);
        // console.log(name, newDetails);
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
            <Grid item xs={4} sm={4} md={6}>
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
                sm={4}
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
                    <form onSubmit={handleRegisterSubmit}>
                        <h2>Register</h2>
                        <TextField
                            required
                            onBlur={handleChange}
                            label="Name"
                            name="name"
                            variant="standard"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Person></Person>
                                    </InputAdornment>
                                ),
                            }}
                            sx={{ width: "60%", my: 1 }}
                        />
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
                            required
                            sx={{ width: "60%", my: 1 }}
                            variant="standard"
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
                        <TextField
                            onBlur={handleChange}
                            required
                            name="password"
                            label="Confirm Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock></Lock>
                                    </InputAdornment>
                                ),
                            }}
                            sx={{ width: "60%", my: 1 }}
                        />
                    </form>
                    {error.length > 0 && (
                        <Alert onClose={handleClose} severity="error">
                            {error}!
                        </Alert>
                    )}
                    <Button
                        type="submit"
                        onClick={handleRegisterSubmit}
                        variant="contained"
                        sx={{ px: 5, my: 2 }}
                    >
                        Sign Up
                    </Button>
                    <br />
                    <Link to="/login" style={{ textDecoration: "none" }}>
                        <Button variant="text" sx={{ px: 5 }}>
                            Already Has An Acount?
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
                        onClick={() => handleGoogleSignIn({}, history)}
                        variant="text"
                        sx={{ px: 5, my: 1 }}
                    >
                        <Google></Google>
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Register;
