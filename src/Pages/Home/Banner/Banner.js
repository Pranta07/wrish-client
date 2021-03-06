import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
const Banner = () => {
    const items = [
        {
            id: 1,
            title: "The Classics",
            subtitle: "Timeless & Elegant",
            description:
                "Complete your everyday look with a classic leather strap watch!",
            bgImg: "https://i.ibb.co/my4Qks2/vitae-london-8-BOZ2-Tx-O2l-Q-unsplash.jpg",
        },
        {
            id: 2,
            title: "Best Seller",
            subtitle: "Timeless & Elegant",
            description:
                "Complete your everyday look with a classic leather strap watch!",
            bgImg: "https://i.ibb.co/n8v7scV/vitae-london-pm-XO831uv-PU-unsplash.jpg",
        },
        {
            id: 3,
            title: "New Arrivals",
            subtitle: "Timeless & Elegant",
            description:
                "Complete your everyday look with a classic leather strap watch!",
            bgImg: "https://i.ibb.co/9n0Vx6s/bradley-ziffer-e-AOl9-QREIY0-unsplash.jpg",
        },
    ];

    return (
        <Carousel>
            {items.map((item) => (
                <Paper
                    key={item.id}
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
                    <Typography component="div" sx={{ mx: 1 }}>
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
                                fontSize: "h3.fontSize",
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
                        <Link to="/watches" style={{ textDecoration: "none" }}>
                            <Button variant="contained" sx={{ px: 4, py: 1 }}>
                                Shop Now
                            </Button>
                        </Link>
                    </Typography>
                </Paper>
            ))}
        </Carousel>
    );
};

export default Banner;
