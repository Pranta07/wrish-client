import { Box, Button, Container, TextField } from "@mui/material";
import React, { useRef } from "react";
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
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import ContactImg from "../../assets/undraw_contact_us.svg";
import Map from "./Map";
import "./Contact.css";
import useAuth from "../../hooks/useAuth";

const Contact = () => {
    const { user } = useAuth();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_euwrdad",
                "template_ufnso4q",
                form.current,
                "user_wsFjuvxgobkwxPu52i3qs"
            )
            .then(
                (result) => {
                    // console.log(result.text);
                    Swal.fire({
                        icon: "success",
                        title: "Message Sent Successfully!",
                        showConfirmButton: false,
                        timer: 2000,
                    });
                },
                (error) => {
                    // console.log(error.text);
                    Swal.fire({
                        icon: "error",
                        title: "Something Went Wrong! Please Try Again!",
                        showConfirmButton: false,
                        timer: 2000,
                    });
                }
            );

        e.target.reset();
    };

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

                <Box sx={{ my: 12 }}>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        <Grid item xs={4} sm={8} md={6} sx={{ mb: 3 }}>
                            <img src={ContactImg} alt="" width="100%" />
                        </Grid>

                        <Grid item xs={4} sm={8} md={6}>
                            <Box
                                sx={{
                                    width: { xs: "90%", sm: "85%", md: "70%" },
                                    mx: "auto",
                                }}
                            >
                                <form ref={form} onSubmit={sendEmail}>
                                    <TextField
                                        required
                                        label="Name"
                                        fullWidth
                                        multiline
                                        rows={1}
                                        name="name"
                                        sx={{ marginBottom: "16px" }}
                                        defaultValue={user.displayName}
                                    />
                                    <TextField
                                        required
                                        label="Email"
                                        type="email"
                                        multiline
                                        rows={1}
                                        fullWidth
                                        name="email"
                                        sx={{ marginBottom: "16px" }}
                                        defaultValue={user.email}
                                    />
                                    <TextField
                                        required
                                        label="Subject"
                                        type="text"
                                        multiline
                                        rows={2}
                                        fullWidth
                                        name="subject"
                                        sx={{ marginBottom: "16px" }}
                                    />
                                    <TextField
                                        required
                                        variant="outlined"
                                        label="Message"
                                        multiline
                                        rows={4}
                                        fullWidth
                                        name="message"
                                        sx={{ marginBottom: "16px" }}
                                    />
                                    <Button
                                        type="submit"
                                        className="btn"
                                        variant="contained"
                                        style={{
                                            display: "flex",
                                            margin: "3px",
                                        }}
                                    >
                                        Send
                                    </Button>
                                </form>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Footer></Footer>
        </Page>
    );
};

export default Contact;
