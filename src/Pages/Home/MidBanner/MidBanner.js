import { Button, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { Link } from "react-router-dom";

const MidBanner = () => {
    const style = {
        backgroundImage: `url("https://i.ibb.co/Xz5cDKh/salvador-escalante-Efjlkpo-Gjs4-unsplash.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        flexGrow: 1,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    return (
        <Box sx={{ my: 3 }}>
            <Paper style={style}>
                <Typography component="div">
                    <Box
                        sx={{
                            letterSpacing: 2,
                            lineHeight: "normal",
                            fontSize: "h5.fontSize",
                            color: "white",
                        }}
                    >
                        SALE UP TO 30% OFF ALL ITEMS
                    </Box>
                    <Box
                        sx={{
                            lineHeight: "normal",
                            fontWeight: "bold",
                            fontFamily: "Monospace",
                            fontSize: "h3.fontSize",
                            color: "white",
                            my: 2,
                        }}
                    >
                        BE THE FIRST TO GET LIMITED EDITIONS
                    </Box>
                    <Link to="/watches" style={{ textDecoration: "none" }}>
                        <Button variant="contained" sx={{ px: 4, py: 1 }}>
                            Shop Now
                        </Button>
                    </Link>
                </Typography>
            </Paper>
        </Box>
    );
};

export default MidBanner;
