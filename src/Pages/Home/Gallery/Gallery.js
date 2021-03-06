import { Add } from "@mui/icons-material";
import { Avatar, Container, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Gallery.css";

const Gallery = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1000 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1000, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        },
    };

    const imgUrls = [
        "https://i.ibb.co/b54L9rK/rsz-marcin-nowak-yd3gxapkwim-unsplash.jpg",
        "https://i.ibb.co/DrCjb2n/matt-brett-5-Nhqzpj-V-zc-unsplash.jpg",
        "https://i.ibb.co/dj6vKCj/klickors-moe-1-Cji-CJg-HOOY-unsplash.jpg",
        "https://i.ibb.co/qNgk46H/hans-gaber-x-BEn77-CZ8-Q-unsplash.jpg",
        "https://i.ibb.co/XxKhs9j/joppe-spaa-bo3-KAZHZw-Ik-unsplash.jpg",
        "https://i.ibb.co/SvrSmXC/jorg-helberg-Jy-ICT-Cnbec-unsplash.jpg",
    ];

    return (
        <Container>
            <Box sx={{ my: 5 }}>
                <Carousel responsive={responsive}>
                    {imgUrls.map((url) => (
                        <Box sx={{ position: "relative" }} id="box" key={url}>
                            <Avatar
                                alt="watch-img"
                                src={url}
                                sx={{ width: 150, height: 150 }}
                            />
                            <IconButton
                                id="icon-btn"
                                style={{ display: "none" }}
                                sx={{
                                    position: "absolute",
                                    top: "50px",
                                    left: "50px",
                                }}
                            >
                                <Add
                                    sx={{
                                        width: "35px",
                                        height: "35px",
                                        color: "white",
                                    }}
                                ></Add>
                            </IconButton>
                        </Box>
                    ))}
                </Carousel>
            </Box>
        </Container>
    );
};

export default Gallery;
