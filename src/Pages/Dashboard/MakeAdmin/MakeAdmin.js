import { sendEmailVerification } from "@firebase/auth";
import { MailOutline } from "@mui/icons-material";
import { Button, InputAdornment, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import Swal from "sweetalert2";

const MakeAdmin = () => {
    const [email, setEmail] = useState("");
    const handleChange = (e) => {
        setEmail(e.target.value);
    };
    const formRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        formRef.current.reset();

        const user = { email };

        fetch("http://localhost:5000/users/admin", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
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
        <div>
            <h1>Make an Admin</h1>
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
                    sx={{ width: "50%", my: 2 }}
                />
                <br />
                <Button type="submit" variant="contained">
                    Make Admin
                </Button>
            </form>
        </div>
    );
};

export default MakeAdmin;
