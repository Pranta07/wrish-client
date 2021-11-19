import { MailOutline } from "@mui/icons-material";
import {
    Button,
    Divider,
    InputAdornment,
    TextField,
    Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
    const { token } = useAuth();

    const [email, setEmail] = useState("");
    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const formRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        formRef.current.reset();

        const user = { email };
        fetch("https://frozen-inlet-30875.herokuapp.com/users/admin", {
            method: "PUT",
            headers: {
                authorization: `Bearer ${token}`,
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((result) => {
                // console.log(result);
                if (result.modifiedCount) {
                    Swal.fire("Admin", "Admin successfully made!", "success");
                }
                if (result.matchedCount) {
                    Swal.fire("Warning", "Already an Admin!", "warning");
                } else {
                    Swal.fire("Warning", "Users Not Exist!", "warning");
                }
            });
    };

    return (
        <Box
            sx={{
                border: "1px solid gray",
                borderRadius: "5px",
                width: "80%",
                mx: "auto",
                p: 3,
                backgroundColor: "#F4F8FF",
                opacity: 0.9,
            }}
        >
            <Typography variant="h4" sx={{ fontFamily: "Monospace", mb: 2 }}>
                Make an Admin
            </Typography>
            <Divider />
            <form onSubmit={handleSubmit} ref={formRef}>
                <TextField
                    onChange={handleChange}
                    label="Email"
                    variant="standard"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <MailOutline></MailOutline>
                            </InputAdornment>
                        ),
                    }}
                    sx={{ width: { xs: "80%", sm: "70%", md: "50%" }, my: 2 }}
                />
                <br />
                <Button type="submit" variant="contained">
                    Make Admin
                </Button>
            </form>
        </Box>
    );
};

export default MakeAdmin;
