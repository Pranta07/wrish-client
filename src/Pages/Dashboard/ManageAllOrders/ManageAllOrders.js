import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { IconButton, LinearProgress, Tooltip, Typography } from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import { Delete, LocalShippingRounded, Pending } from "@mui/icons-material";
import Swal from "sweetalert2";
const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [isUpdate, steIsUpdate] = useState(false);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();

    const handleShipped = (id) => {
        steIsUpdate(false);
        fetch(`http://localhost:5000/orders/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount) {
                    steIsUpdate(true);
                }
            });
    };

    const handleDelete = (id) => {
        // console.log(id);
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
                fetch(`http://localhost:5000/orders/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((result) => {
                        // console.log(result);
                        if (result.deletedCount) {
                            steIsUpdate(true);
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
        fetch(`http://localhost:5000/manage/orders`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setAllOrders(data);
            })
            .finally(() => setLoading(false));
    }, [user.email, isUpdate]);

    return (
        <Box>
            <Typography variant="h3" sx={{ my: 2 }}>
                Manage all Orders
            </Typography>
            <hr />
            {loading && (
                <Box sx={{ width: "100%" }}>
                    <LinearProgress />
                </Box>
            )}

            {allOrders.length === 0 && !loading ? (
                <Typography variant="h3" sx={{ my: 2 }}>
                    No Orders Done Yet!
                </Typography>
            ) : (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>User</TableCell>
                                <TableCell>Watch</TableCell>
                                <TableCell align="right">Brand</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {allOrders?.map((order) => (
                                <TableRow
                                    key={order?._id}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell>{order?.name}</TableCell>
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
                                    <TableCell align="right">
                                        <Tooltip title="Shipped">
                                            <IconButton
                                                onClick={() =>
                                                    handleShipped(order._id)
                                                }
                                            >
                                                <LocalShippingRounded></LocalShippingRounded>
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Delete">
                                            <IconButton
                                                onClick={() =>
                                                    handleDelete(order._id)
                                                }
                                            >
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

export default ManageAllOrders;
