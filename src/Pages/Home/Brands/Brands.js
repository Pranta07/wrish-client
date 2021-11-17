import { Avatar, Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Brands = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        },
    };

    const imgUrls = [
        "https://i.ibb.co/ZYnPGnk/download.png",
        "https://i.ibb.co/gS4GvPs/Rolex-Logo.jpg",
        "https://i.ibb.co/ZYnPGnk/download.png",
        "https://i.ibb.co/GHqrFNn/images-2.jpg",
        "https://i.ibb.co/mvNbY0J/images.png",
        "https://i.ibb.co/ZYnPGnk/download.png",
    ];

    return (
        <Container>
            <Box sx={{ my: 5 }}>
                <Carousel responsive={responsive}>
                    {imgUrls.map((url) => (
                        <div key={url}>
                            <Avatar
                                src={url}
                                alt="Remy Sharp"
                                sx={{ width: 150, height: 150 }}
                            />
                        </div>
                    ))}
                </Carousel>
            </Box>
        </Container>
    );
};

export default Brands;
