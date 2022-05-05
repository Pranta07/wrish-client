import React from "react";
import { Link, NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Container } from "@mui/material";
import FAQ from "./FAQ";
import aboutImg from "../../assets/undraw_watch.svg";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer";
import "./About.css";
// import Page from "../../components/Page";
// import FAQ from "../../components/faq/FAQ";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const services = [
    "Exclusive Watches",
    "Order Tracking",
    "Online Payment",
    "Home Delivery",
    "Customer Reviews",
];

const About = () => {
    return (
        // <Page title="About us">
        <>
            <Navigation></Navigation>
            <div
                style={{
                    textAlign: "center",
                    marginBottom: "20px",
                    backgroundColor: "#f5f5f5",
                    padding: "100px",
                    letterSpacing: "2px",
                }}
            >
                <h1> About Us </h1>
                <span>
                    <NavLink to="/" style={{ textDecoration: "none" }}>
                        Home
                    </NavLink>
                </span>
                {" > "} <span> About Us </span>
            </div>

            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                        <Item>
                            <div
                                style={{
                                    padding: "10px",
                                    borderRadius: "10px",
                                }}
                            >
                                <div
                                    className="about-img"
                                    style={{ overflow: "hidden" }}
                                >
                                    <img
                                        src={aboutImg}
                                        alt=""
                                        width="100%"
                                        height="300"
                                    />
                                </div>
                                <h1
                                    style={{
                                        letterSpacing: "2px",
                                        fontSize: "30px",
                                        textAlign: "left",
                                        marginTop: "20px",
                                    }}
                                >
                                    WELCOME, WE ARE{" "}
                                    <span style={{ color: "#1976d2" }}>
                                        WRISH!
                                    </span>
                                </h1>
                                <small>
                                    <p
                                        style={{
                                            letterSpacing: "2px",
                                            fontSize: "12px",
                                            textAlign: "left",
                                            marginTop: "10px",
                                            marginBottom: "8px",
                                            color: "gray",
                                        }}
                                    >
                                        We provide to you the best choiches for
                                        you. We provide oyu the best quality
                                        watches for you and your friends &
                                        family. Online payment and home delivery
                                        is also available.
                                    </p>
                                </small>
                                <NavLink
                                    to="/contact"
                                    style={{ textDecoration: "none" }}
                                >
                                    <Button
                                        variant="contained"
                                        sx={{
                                            display: "flex",
                                            justifyContent: "left",
                                            my: 2,
                                        }}
                                    >
                                        Contact Now
                                    </Button>
                                </NavLink>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Item>
                            <div style={{ textAlign: "left", padding: "8px" }}>
                                <h1
                                    style={{
                                        letterSpacing: "2px",
                                        fontSize: "20px",
                                        borderBottom: "2px solid #1976d2",
                                        borderRadius: "5px",
                                        paddingBottom: "10px",
                                        marginBottom: "10px",
                                    }}
                                >
                                    SERVICES
                                </h1>
                                {services.map((category, index) => (
                                    <p
                                        className="service-item"
                                        style={{
                                            marginTop: "20px",
                                            letterSpacing: "2px",
                                        }}
                                        key={index}
                                    >
                                        {category.toUpperCase()}
                                    </p>
                                ))}
                            </div>
                        </Item>
                    </Grid>
                </Grid>

                <p
                    style={{
                        color: "#1976d2",
                        fontWeight: "bold",
                        marginTop: "100px",
                    }}
                >
                    Questions
                </p>
                <h1 style={{ color: "gray", fontWeight: "bold" }}>
                    Frequently Asked Questions
                </h1>
                <Box sx={{ width: "15%", mx: "auto", mt: 2, mb: 3 }}>
                    <hr />
                </Box>
                <div style={{ marginTop: "30px", marginBottom: "100px" }}>
                    {<FAQ></FAQ>}
                </div>
            </Container>
            <Footer></Footer>
        </>
        // </Page>
    );
};

export default About;
