import { Box } from "@mui/material";
import React from "react";
import Page from "../../Page/Page";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Gallery from "../Gallery/Gallery";
import MidBanner from "../MidBanner/MidBanner";
import TopProducts from "../TopProducts/TopProducts";
import UserReviews from "../UserReviews/UserReviews";

const Home = () => {
    return (
        <Page title="Home">
            <Box>
                <Navigation></Navigation>
                <Banner></Banner>
                <TopProducts></TopProducts>
                <MidBanner></MidBanner>
                <Gallery></Gallery>
                <UserReviews></UserReviews>
                <Brands></Brands>
                <Footer></Footer>
            </Box>
        </Page>
    );
};

export default Home;
