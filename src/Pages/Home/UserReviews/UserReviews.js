import { Avatar, Container, Paper, Rating, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";

const UserReviews = () => {
    const [reviews, setReviews] = useState([]);

    const style = {
        backgroundImage: `url("https://i.ibb.co/rk51MHM/daniele-levis-pelusi-rm-M8-V7-L1-Bh-M-unsplash.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        flexGrow: 1,
        height: "400",
    };
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    return (
        <Container>
            <Typography variant="h4" sx={{ fontWeight: "bold", my: 2 }}>
                REVIEWS
            </Typography>
            <Box sx={{ width: "25%", mx: "auto", mb: 2 }}>
                <hr />
            </Box>
            <Carousel>
                {reviews.map((item) => (
                    <Paper
                        key={item._id}
                        style={style}
                        sx={{ padding: "20px" }}
                    >
                        <Box>
                            <img
                                src="https://i.ibb.co/j5zxy4j/Quotation-Symbol-PNG.png"
                                alt=""
                                width="25%"
                            />
                        </Box>
                        <Typography
                            component="div"
                            sx={{ display: "flex", justifyContent: "center" }}
                        >
                            <Box
                                sx={{
                                    lineHeight: "normal",
                                    letterSpacing: 2,
                                    fontSize: "normal",
                                    color: "black",
                                    mb: 3,
                                    width: "50%",
                                }}
                            >
                                {item.reviewDesc}
                            </Box>
                        </Typography>
                        <br />
                        <Avatar
                            alt="Remy Sharp"
                            src={item.img}
                            sx={{ mx: "auto", my: 1, width: 56, height: 56 }}
                        />
                        <Typography component="div">
                            <Box
                                sx={{
                                    letterSpacing: 2,
                                    lineHeight: "normal",
                                    fontSize: "normal",
                                    color: "black",
                                }}
                            >
                                {item.name.toUpperCase()}
                            </Box>
                        </Typography>
                        <Rating name="read-only" value={item.rating} readOnly />
                    </Paper>
                ))}
            </Carousel>
        </Container>
    );
};

export default UserReviews;
