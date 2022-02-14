import { ArrowForwardTwoTone } from "@mui/icons-material";
import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box sx={{ m: 5 }}>
                <Typography
                    variant="h1"
                    component="div"
                    gutterBottom
                    sx={{
                        fontWeight: "bold",
                        fontFamily: "Monospace",
                    }}
                >
                    404
                </Typography>
                <Typography
                    variant="h3"
                    component="div"
                    gutterBottom
                    sx={{
                        fontWeight: "bold",
                        fontFamily: "Monospace",
                    }}
                >
                    Oops! That page can't be found.
                </Typography>
                <Divider
                    sx={{
                        width: 200,
                        p: 1,
                        backgroundColor: "black",
                        marginX: "auto",
                        marginY: 5,
                        "&:hover": {
                            backgroundColor: "white",
                            color: "black",
                        },
                    }}
                ></Divider>

                <Box sx={{ typography: "body2", fontFamily: "Monospace" }}>
                    We're really sorry but we can't seem to find the page you
                    were looking for.
                </Box>

                <Link to="/" style={{ textDecoration: "none" }}>
                    <Button
                        variant="contained"
                        endIcon={<ArrowForwardTwoTone />}
                        sx={{
                            my: 5,
                            px: 5,
                            py: 1,
                            backgroundColor: "black",
                            color: "white",
                            fontFamily: "Monospace",
                        }}
                    >
                        BACK TO HOMEPAGE
                    </Button>
                </Link>
            </Box>
        </Box>
    );
};

export default NotFound;
