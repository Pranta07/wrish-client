import React from "react";
import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";

const Footer = () => {
    const style = {
        fontWeight: "light",
        typography: "body2",
        lineHeight: 2,
        color: "text.secondary",
    };
    return (
        <Box>
            <div
                style={{
                    borderBottom: "1px solid gray",
                    borderTop: "1px solid gray",
                    padding: 12,
                }}
            >
                <img
                    src="https://i.ibb.co/m5bgWcG/logo.png"
                    alt=""
                    width="150"
                />
            </div>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                sx={{ borderBottom: "1px solid gray", padding: "10px" }}
            >
                <Grid item xs={4} sm={4} md={3}>
                    <Typography component="div">
                        <Box
                            sx={{
                                fontFamily: "Monospace",
                                fontSize: "h6.fontSize",
                                m: 1,
                            }}
                        >
                            Information
                        </Box>
                    </Typography>
                    <Typography sx={style}>Shipping</Typography>
                    <Typography sx={style}>Warranty & Authenticity</Typography>
                    <Typography sx={style}>Terms & Conditions</Typography>
                    <Typography sx={style}>Privacy Policy</Typography>
                </Grid>
                <Grid item xs={4} sm={4} md={3}>
                    <Typography component="div">
                        <Box
                            sx={{
                                fontFamily: "Monospace",
                                fontSize: "h6.fontSize",
                                m: 1,
                            }}
                        >
                            Help
                        </Box>
                    </Typography>
                    <Typography sx={style}>Contact Us</Typography>
                    <Typography sx={style}>About Us</Typography>
                    <Typography sx={style}>Reviews</Typography>
                    <Typography sx={style}>Terms of Service</Typography>
                    <Typography sx={style}>Refund policy Contact</Typography>
                </Grid>
                <Grid item xs={4} sm={4} md={3}>
                    <Typography component="div">
                        <Box
                            sx={{
                                fontFamily: "Monospace",
                                fontSize: "h6.fontSize",
                                m: 1,
                            }}
                        >
                            Services
                        </Box>
                    </Typography>
                    <Typography sx={style}>Sale</Typography>
                    <Typography sx={style}>Quick Ship</Typography>
                    <Typography sx={style}>New Designs</Typography>
                    <Typography sx={style}>Protection Plan</Typography>
                    <Typography sx={style}>Gift Cards</Typography>
                </Grid>
                <Grid item xs={4} sm={4} md={3}>
                    <Typography component="div">
                        <Box
                            sx={{
                                fontFamily: "Monospace",
                                fontSize: "h6.fontSize",
                                m: 1,
                            }}
                        >
                            Categories
                        </Box>
                    </Typography>
                    <Typography sx={style}>Watches</Typography>
                    <Typography sx={style}>Watch Accessories</Typography>
                    <Typography sx={style}>Clocks</Typography>
                    <Typography sx={style}>Top Brands</Typography>
                </Grid>
            </Grid>
            <Typography sx={style} style={{ padding: "10px" }}>
                Copyright © 2021. All Right Reserved | Pranta Pal
            </Typography>
        </Box>
    );
};

export default Footer;
