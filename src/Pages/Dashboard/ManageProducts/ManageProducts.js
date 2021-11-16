import { Delete } from "@mui/icons-material";
import {
    Divider,
    Grid,
    IconButton,
    LinearProgress,
    Tooltip,
    Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageProducts = () => {
    const [watches, setWatches] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isUpdate, steIsUpdate] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:5000/watches/all`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setWatches(data);
                setIsLoading(false);
            });
    }, [isUpdate]);

    const style = {
        m: 1,
        fontFamily: "Monospace",
        letterSpacing: 2,
        color: "white",
        fontWeight: "bold",
        textAlign: "left",
    };

    const handleDelete = (id) => {
        steIsUpdate(false);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/watches/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((result) => {
                        // console.log(result);
                        if (result.deletedCount) {
                            steIsUpdate(true);
                            Swal.fire(
                                "Success!",
                                "Product has been deleted.",
                                "success"
                            );
                        }
                    });
            }
        });
    };

    return (
        <div>
            <h1>Manage Products</h1>
            <Divider sx={{ my: 1 }}></Divider>
            {isLoading ? (
                <Box sx={{ width: "100%" }}>
                    <LinearProgress />
                </Box>
            ) : (
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {watches?.map((product) => (
                        <Grid item xs={2} sm={4} md={3} key={product._id}>
                            <div style={{ position: "relative" }}>
                                <img
                                    src={product.img}
                                    alt=""
                                    width="100%"
                                    style={{ borderRadius: "5px" }}
                                />
                                <Box
                                    style={{
                                        position: "absolute",
                                        top: "8px",
                                        left: "8px",
                                    }}
                                >
                                    <Typography variant="h5">
                                        <Box sx={style}>{product.name}</Box>
                                    </Typography>
                                    <Typography variant="h6">
                                        <Box sx={style}>${product.price}</Box>
                                    </Typography>
                                </Box>
                                <Box
                                    style={{
                                        position: "absolute",
                                        bottom: "6px",
                                        right: "6px",
                                    }}
                                >
                                    <Tooltip title="Delete">
                                        <IconButton
                                            onClick={() =>
                                                handleDelete(product._id)
                                            }
                                            sx={{ color: "white" }}
                                        >
                                            <Delete></Delete>
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            )}
        </div>
    );
};

export default ManageProducts;
