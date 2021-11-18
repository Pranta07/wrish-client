import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import useAuth from "../../../hooks/useAuth";
import { Delete, LocalShippingRounded, Pending } from "@mui/icons-material";
import Swal from "sweetalert2";
import {
    Avatar,
    Grid,
    IconButton,
    LinearProgress,
    Tooltip,
    Typography,
} from "@mui/material";

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [isDelete, steIsDelete] = useState(false);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();

    const handleDelete = (id) => {
        // console.log(id);
        steIsDelete(false);
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
                fetch(`https://frozen-inlet-30875.herokuapp.com/orders/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((result) => {
                        // console.log(result);
                        if (result.deletedCount) {
                            steIsDelete(true);
                            Swal.fire(
                                "Deleted!",
                                "Your order has been deleted.",
                                "success"
                            );
                        }
                    });
            }
        });
    };

    useEffect(() => {
        setLoading(true);
        fetch(`https://frozen-inlet-30875.herokuapp.com/orders/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setMyOrders(data);
            })
            .finally(() => setLoading(false));
    }, [user.email, isDelete]);

    return (
        <Grid
            // xs={10}
            // sm={12}
            // md={12}
            sx={{ display: "flex", justifyContent: "center" }}
        >
            <Box
                sx={{
                    borderRadius: "5px",
                    backgroundColor: "#F4F8FF",
                    opacity: 0.95,
                    height: "80vh",
                    overflowX: "scroll",
                    width: {
                        xs: "350px!important",
                        sm: "500px!important",
                        md: "100%!important",
                    },
                }}
            >
                <Typography
                    variant="h4"
                    sx={{ fontFamily: "Monospace", py: 1 }}
                >
                    My Orders
                </Typography>
                <hr />
                {loading && (
                    <Box sx={{ width: "100%" }}>
                        <LinearProgress />
                    </Box>
                )}
                {myOrders.length === 0 && !loading ? (
                    <Typography variant="h3" sx={{ my: 2 }}>
                        Currently You Have No Orders To Display!
                    </Typography>
                ) : (
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Watch</TableCell>
                                    <TableCell align="right">Brand</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">Status</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {myOrders?.map((order) => (
                                    <TableRow
                                        key={order?._id}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <TableCell component="th" scope="row">
                                            <Avatar
                                                alt="Remy Sharp"
                                                src={order?.productImg}
                                            />
                                        </TableCell>
                                        <TableCell align="right">
                                            {order?.productName}
                                        </TableCell>
                                        <TableCell align="right">
                                            ${order?.productPrice}
                                        </TableCell>
                                        <TableCell align="right">
                                            {order?.status
                                                ? "Shipped"
                                                : "Pending"}
                                            {!order?.status ? (
                                                <IconButton>
                                                    <Pending></Pending>
                                                </IconButton>
                                            ) : (
                                                <Tooltip title="Shipped">
                                                    <IconButton>
                                                        <LocalShippingRounded></LocalShippingRounded>
                                                    </IconButton>
                                                </Tooltip>
                                            )}
                                        </TableCell>
                                        <TableCell
                                            onClick={() =>
                                                handleDelete(order._id)
                                            }
                                            align="right"
                                        >
                                            <Tooltip title="Delete">
                                                <IconButton>
                                                    <Delete></Delete>
                                                </IconButton>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Box>
        </Grid>
    );
};

export default MyOrders;
