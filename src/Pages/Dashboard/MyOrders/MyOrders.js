import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { IconButton, Tooltip, Typography } from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import { Delete } from "@mui/icons-material";
import Swal from "sweetalert2";

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [isDelete, steIsDelete] = useState(false);
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
                fetch(`http://localhost:5000/orders/${id}`, {
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
        fetch(`http://localhost:5000/orders/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setMyOrders(data);
            });
    }, [user.email, isDelete]);

    return (
        <Box>
            <Typography variant="h3" sx={{ my: 2 }}>
                My Orders
            </Typography>
            <hr />
            {myOrders.length === 0 ? (
                <Typography variant="h3" sx={{ my: 2 }}>
                    Currently You Have Orders To Display!
                </Typography>
            ) : (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        <img
                                            src={order?.productImg}
                                            alt=""
                                            width="50"
                                            height="30"
                                        />
                                    </TableCell>
                                    <TableCell align="right">
                                        {order?.productName}
                                    </TableCell>
                                    <TableCell align="right">
                                        ${order?.productPrice}
                                    </TableCell>
                                    <TableCell align="right">
                                        {order?.status ? "Shipped" : "Pending"}
                                    </TableCell>
                                    <TableCell
                                        onClick={() => handleDelete(order._id)}
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
    );
};

export default MyOrders;
