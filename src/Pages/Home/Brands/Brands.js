import { Container, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Brands = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
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

    return (
        <Container>
            <Box sx={{ my: 5 }}>
                <Carousel responsive={responsive}>
                    <div>
                        <img
                            src="https://i.ibb.co/ZYnPGnk/download.png"
                            alt="brand-logo"
                            width="100%"
                        />
                    </div>
                    <div>
                        <img
                            src="https://i.ibb.co/gS4GvPs/Rolex-Logo.jpg"
                            alt="brand-logo"
                            width="100%"
                        />
                    </div>
                    <div>
                        <img
                            src="https://i.ibb.co/ZYnPGnk/download.png"
                            alt="brand-logo"
                            width="100%"
                        />
                    </div>
                    <div>
                        <img
                            src="https://i.ibb.co/GHqrFNn/images-2.jpg"
                            alt="brand-logo"
                            width="100%"
                        />
                    </div>
                    <div>
                        <img
                            src="https://i.ibb.co/mvNbY0J/images.png"
                            alt="brand-logo"
                            width="100%"
                        />
                    </div>
                    <div>
                        <img
                            src="https://i.ibb.co/ZYnPGnk/download.png"
                            alt="brand-logo"
                            width="100%"
                        />
                    </div>
                </Carousel>
                ;
            </Box>
        </Container>
    );
};

export default Brands;
