import { Button, Box } from "@mui/material";
import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import TopProducts from "../TopProducts/TopProducts";
import UserReviews from "../UserReviews/UserReviews";

const Home = () => {
    return (
        <Box>
            <Banner></Banner>
            <TopProducts></TopProducts>
            <UserReviews></UserReviews>
            <Footer></Footer>
        </Box>
    );
};

export default Home;
