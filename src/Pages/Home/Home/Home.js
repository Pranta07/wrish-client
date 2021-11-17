import { Box } from "@mui/material";
import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import MidBanner from "../MidBanner/MidBanner";
import TopProducts from "../TopProducts/TopProducts";
import UserReviews from "../UserReviews/UserReviews";

const Home = () => {
    return (
        <Box>
            <Navigation></Navigation>
            <Banner></Banner>
            <TopProducts></TopProducts>
            <MidBanner></MidBanner>
            <UserReviews></UserReviews>
            <Brands></Brands>
            <Footer></Footer>
        </Box>
    );
};

export default Home;
