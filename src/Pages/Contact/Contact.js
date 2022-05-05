import { Box, Container } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import RoomIcon from "@mui/icons-material/Room";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Grid from "@mui/material/Grid";
import Page from "../Page/Page";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import "./Contact.css";
import Map from "./Map";

const Contact = () => {
    return (
        <Page title="Contact Us">
            <Navigation></Navigation>
            <Box
                sx={{
                    textAlign: "center",
                    marginBottom: "20px",
                    backgroundColor: "#f5f5f5",
                    padding: "100px",
                    letterSpacing: "2px",
                }}
            >
                <h1> Contact Us </h1>
                <span>
                    <NavLink to="/" style={{ textDecoration: "none" }}>
                        Home
                    </NavLink>
                </span>
                {" > "} <span> Contact Us </span>
            </Box>

            <Container>
                <Box sx={{ pt: 5, pb: 1, textAlign: "left" }}>
                    <h4 style={{ paddingBottom: "10px" }}>
                        {" "}
                        Email us with ease{" "}
                    </h4>
                    <hr />
                </Box>

                <Grid container spacing={3} sx={{ mb: 4 }}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ pb: 1, textAlign: "left" }}>
                            <h1>
                                Get in
                                <span className="contact-color"> Touch</span>
                            </h1>
                            <small style={{ color: "lightgray" }}>
                                We provide to you the best choiches for you. We
                                provide oyu the best quality watches for you and
                                your friends & family. Online payment and home
                                delivery is also available.
                            </small>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                my: 4,
                            }}
                        >
                            <EmailIcon sx={{ mr: 2, color: "#526ff3" }} />
                            <div>
                                <p
                                    style={{
                                        display: "flex",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Email
                                </p>
                                <p>wrish.watch@gmail.com</p>
                            </div>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                my: 4,
                            }}
                        >
                            <PhoneIcon sx={{ mr: 2, color: "#526ff3" }} />
                            <div>
                                <p
                                    style={{
                                        display: "flex",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Phone
                                </p>
                                <p>+88018********</p>
                            </div>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                my: 4,
                            }}
                        >
                            <RoomIcon sx={{ mr: 2, color: "#526ff3" }} />
                            <div>
                                <p
                                    style={{
                                        display: "flex",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Address
                                </p>
                                <p>Chittagong-4100, Bangladesh</p>
                            </div>
                        </Box>
                        <hr
                            style={{ marginTop: "40px", marginBottom: "10px" }}
                        />
                        <Box sx={{ textAlign: "left" }}>
                            <p
                                style={{
                                    fontWeight: "bold",
                                    marginBottom: "5px",
                                }}
                            >
                                FOLLOW US ON
                            </p>
                            <FacebookIcon
                                className="social-icon"
                                sx={{ fontSize: "40px" }}
                            />
                            <TwitterIcon
                                className="social-icon"
                                sx={{ fontSize: "40px" }}
                            />
                            <InstagramIcon
                                className="social-icon"
                                sx={{ fontSize: "40px" }}
                            />
                            <LinkedInIcon
                                className="social-icon"
                                sx={{ fontSize: "40px" }}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Map></Map>
                    </Grid>
                </Grid>

                {/* <div className="row d-flex align-items-center py-5 my-5">
                    <div className="col-lg-6">
                        <img src={ContactImg} alt="" className="w-100" />
                    </div>
                    <div className="col-lg-6">
                        <form onSubmit={sendEmail}>
                            <div className="row pt-2 mx-auto">
                                <h4 className="fw-bold">Drop Us A Line</h4>
                                <p className="text-secondary">
                                    <small>
                                        We normally respond within 24 hours.
                                    </small>
                                </p>
                                <div className="col-12 col-md-10 form-group">
                                    <label
                                        className="all-label"
                                        htmlFor="nameId"
                                    >
                                        Your Name *
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="name"
                                        id="nameId"
                                    />
                                </div>
                                <div className="col-12 col-md-10 form-group pt-3">
                                    <label
                                        className="all-label"
                                        htmlFor="emailId"
                                    >
                                        Your Email *
                                    </label>
                                    <input
                                        className="form-control"
                                        type="email"
                                        id="emailId"
                                    />
                                </div>
                                <div className="col-12 col-md-10 form-group pt-3 ">
                                    <label
                                        className="all-label"
                                        htmlFor="subjectId"
                                    >
                                        Subject
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="subject"
                                        id="subjectId"
                                    />
                                </div>
                                <div className="col-12 col-md-10 form-group pt-3 ">
                                    <label
                                        className="all-label"
                                        htmlFor="messageID"
                                    >
                                        Your Message
                                    </label>
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        id="messageID"
                                        cols={30}
                                        rows={5}
                                    ></textarea>
                                </div>
                                <div className="pt-3">
                                    <Button type="submit" variant="contained">
                                        Send Message
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div> */}
            </Container>
            <Footer></Footer>
        </Page>
    );
};

export default Contact;
