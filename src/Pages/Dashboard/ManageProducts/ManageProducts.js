import { Delete } from "@mui/icons-material";
import {
    Divider,
    Grid,
    IconButton,
    LinearProgress,
    Pagination,
    PaginationItem,
    Stack,
    Tooltip,
    Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ManageProducts = () => {
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);
    const [watches, setWatches] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isUpdate, steIsUpdate] = useState(false);

    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        setIsLoading(true);
        fetch(
            `https://wrish.up.railway.app/watches?page=${page}&&productCount=8`
        )
            .then((res) => res.json())
            .then((data) => {
                setCount(Math.ceil(data.count / 8));
                setWatches(data.products);
                setIsLoading(false);
            });
    }, [isUpdate, page]);

    const style = {
        m: 1,
        fontFamily: "Monospace",
        letterSpacing: 1,
        color: "white",
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
                fetch(`https://wrish.up.railway.app/watches/${id}`, {
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
        <Box
            sx={{
                borderRadius: "5px",
                margin: "10px 20px",
                backgroundColor: "#F4F8FF",
                opacity: 0.9,
                p: 3,
                height: "80vh",
                overflowY: "scroll",
            }}
        >
            <Typography variant="h4" sx={{ fontFamily: "Monospace", pb: 1 }}>
                Manage Products
            </Typography>
            <Divider sx={{ my: 1 }}></Divider>
            {isLoading ? (
                <Box sx={{ width: "100%" }}>
                    <LinearProgress />
                </Box>
            ) : (
                <>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        {watches?.map((product) => (
                            <Grid item xs={4} sm={4} md={3} key={product._id}>
                                <div style={{ position: "relative" }}>
                                    <img
                                        className="card-img"
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
                                            <Box sx={style}>
                                                ${product.price}
                                            </Box>
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
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            my: 3,
                        }}
                    >
                        <Stack spacing={2}>
                            <Pagination
                                count={count}
                                renderItem={(item) => (
                                    <PaginationItem
                                        components={{
                                            previous: ArrowBackIcon,
                                            next: ArrowForwardIcon,
                                        }}
                                        {...item}
                                    />
                                )}
                                page={page}
                                onChange={handleChange}
                            />
                        </Stack>
                    </Box>
                </>
            )}
        </Box>
    );
};

export default ManageProducts;
