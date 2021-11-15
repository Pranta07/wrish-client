import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const Banner = () => {
    var items = [
        {
            id: 1,
            title: "The Classics",
            subtitle: "Timeless & Elegant",
            description:
                "Complete your everyday look with a classic leather strap watch!",
            bgImg: "https://i.ibb.co/Ry2s177/vitae-london-8-BOZ2-Tx-O2l-Q-unsplash.jpg",
        },
        {
            id: 2,
            title: "Best Seller",
            subtitle: "Timeless & Elegant",
            description:
                "Complete your everyday look with a classic leather strap watch!",
            bgImg: "https://i.ibb.co/5LsWnNz/vitae-london-pm-XO831uv-PU-unsplash.jpg",
        },
        {
            id: 3,
            title: "New Arrivals",
            subtitle: "Timeless & Elegant",
            description:
                "Complete your everyday look with a classic leather strap watch!",
            bgImg: "https://i.ibb.co/FB21gnX/bradley-ziffer-e-AOl9-QREIY0-unsplash.jpg",
        },
    ];

    return (
        <Carousel>
            {items.map((item) => (
                <Paper
                    style={{
                        backgroundImage: `url(${item.bgImg})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundAttachment: "fixed",
                        flexGrow: 1,
                        height: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Typography component="div">
                        <Box
                            sx={{
                                letterSpacing: 2,
                                lineHeight: "normal",
                                fontSize: "h6.fontSize",
                                color: "white",
                            }}
                        >
                            {item.subtitle}
                        </Box>
                        <Box
                            sx={{
                                lineHeight: "normal",
                                fontWeight: "bold",
                                fontFamily: "Monospace",
                                fontSize: "h2.fontSize",
                                color: "white",
                            }}
                        >
                            {item.title}
                        </Box>
                        <Box
                            sx={{
                                lineHeight: "normal",
                                letterSpacing: 2,
                                fontSize: "h5.fontSize",
                                color: "white",
                                mb: 3,
                            }}
                        >
                            {item.description}
                        </Box>
                        <Button variant="contained">Shop Now</Button>
                    </Typography>
                </Paper>
            ))}
        </Carousel>
    );
};

export default Banner;
