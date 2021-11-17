import { Avatar, Container, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Gallery = () => {
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
                        <Avatar
                            alt="Remy Sharp"
                            src="https://i.ibb.co/8bdtSpw/marcin-nowak-yd3-Gxapk-Wi-M-unsplash.jpg"
                            sx={{ width: 150, height: 150 }}
                        />
                    </div>
                    <div>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://i.ibb.co/s3yns7Z/matt-brett-5-Nhqzpj-V-zc-unsplash.jpg"
                            sx={{ width: 150, height: 150 }}
                        />
                    </div>
                    <div>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://i.ibb.co/xfnZTPp/klickors-moe-1-Cji-CJg-HOOY-unsplash.jpg"
                            sx={{ width: 150, height: 150 }}
                        />
                    </div>
                    <div>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://i.ibb.co/TvCZ4cP/hans-gaber-x-BEn77-CZ8-Q-unsplash.jpg"
                            sx={{ width: 150, height: 150 }}
                        />
                    </div>
                    <div>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://i.ibb.co/rQTgMJ1/joppe-spaa-bo3-KAZHZw-Ik-unsplash.jpg"
                            sx={{ width: 150, height: 150 }}
                        />
                    </div>
                    <div>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://i.ibb.co/8PCC2bP/jorg-helberg-Jy-ICT-Cnbec-unsplash.jpg"
                            sx={{ width: 150, height: 150 }}
                        />
                    </div>
                </Carousel>
            </Box>
        </Container>
    );
};

export default Gallery;
