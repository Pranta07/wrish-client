import { AccountCircle, MailOutline } from "@mui/icons-material";
import {
    Button,
    Divider,
    InputAdornment,
    Rating,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const RateUs = () => {
    const { user } = useAuth();
    // console.log(user);
    const formRef = useRef();
    const [value, setValue] = useState(5);

    const [review, setReview] = useState({
        name: user.displayName,
        email: user.email,
        img: user.photoURL,
    });

    const handleChange = (e) => {
        const newDetails = { ...review };
        const name = e.target.name;
        newDetails[name] = e.target.value;
        setReview(newDetails);
    };

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        review.rating = value;
        formRef.current.reset();

        //send review data to server
        fetch("https://frozen-inlet-30875.herokuapp.com/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(review),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    Swal.fire({
                        title: "Success",
                        text: "Review Successfully Submitted!",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 2000,
                    });
                }
            });
    };
    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
                sx={{
                    width: "60%",
                    border: "1px solid gray",
                    borderRadius: "5px",
                    backgroundColor: "#F4F8FF",
                    opacity: 0.9,
                }}
            >
                <Typography
                    variant="h4"
                    sx={{ fontFamily: "Monospace", my: 2 }}
                >
                    Share Your Experience.
                </Typography>
                <Divider />
                <form onSubmit={handleReviewSubmit} ref={formRef}>
                    <TextField
                        onBlur={handleChange}
                        defaultValue={user.displayName}
                        label="Name"
                        name="name"
                        variant="standard"
                        InputProps={{
                            readOnly: true,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                        sx={{ width: "60%", my: 1 }}
                    />
                    <TextField
                        onBlur={handleChange}
                        defaultValue={user.email}
                        label="Email"
                        name="email"
                        variant="standard"
                        InputProps={{
                            readOnly: true,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MailOutline></MailOutline>
                                </InputAdornment>
                            ),
                        }}
                        sx={{ width: "60%", my: 1 }}
                    />
                    <TextField
                        onChange={handleChange}
                        name="reviewDesc"
                        label="Review"
                        multiline
                        rows={4}
                        sx={{ width: "60%", my: 1 }}
                    />
                    <Typography component="legend">Rate Us</Typography>
                    <Rating
                        name="rating"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                    <br />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ px: 4, my: 2, width: "20%" }}
                    >
                        Submit
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default RateUs;
