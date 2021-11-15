import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

const UserReviews = () => {
    return (
        <Box>
            <Typography variant="h4" sx={{ fontWeight: "bold", my: 2 }}>
                REVIEWS
            </Typography>
            <Box sx={{ width: "25%", mx: "auto", mb: 2 }}>
                <hr />
            </Box>
        </Box>
    );
};

export default UserReviews;
