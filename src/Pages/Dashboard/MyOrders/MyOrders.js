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
import {
    Delete,
    LocalShippingRounded,
    Payment,
    Pending,
} from "@mui/icons-material";
import Swal from "sweetalert2";
import {
    Avatar,
    Grid,
    IconButton,
    LinearProgress,
    TablePagination,
    Tooltip,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
// import { DataGrid } from "@material-ui/data-grid";

/* const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
        field: "age",
        headerName: "Age",
        type: "number",
        width: 90,
    },
    {
        field: "fullName",
        headerName: "Full name",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
];

const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
]; */

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    const [isDelete, steIsDelete] = useState(false);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [count, setCount] = useState(0);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        // console.log(event.target.value);
        setRowsPerPage(parseInt(event.target.value));
        setPage(0);
    };

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
        fetch(
            `https://frozen-inlet-30875.herokuapp.com/orders/${user.email}?page=${page}&&rows=${rowsPerPage}`
        )
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setMyOrders(data.products);
                setCount(data.count);
            })
            .finally(() => setLoading(false));
    }, [user.email, isDelete, page, rowsPerPage]);

    return (
        <>
            <Grid sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                    sx={{
                        borderRadius: "5px",
                        backgroundColor: "#F4F8FF",
                        opacity: 0.95,
                        height: "80vh",
                        overflowX: "scroll",
                        width: {
                            xs: "330px!important",
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
                        <>
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Watch</TableCell>
                                            <TableCell align="right">
                                                Brand
                                            </TableCell>
                                            <TableCell align="right">
                                                Price
                                            </TableCell>
                                            <TableCell align="right">
                                                Status
                                            </TableCell>
                                            <TableCell align="right">
                                                Action
                                            </TableCell>
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
                                                <TableCell
                                                    component="th"
                                                    scope="row"
                                                >
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
                                                <TableCell align="right">
                                                    {order.payment?.status ? (
                                                        "PAID"
                                                    ) : (
                                                        <Tooltip title="Pay">
                                                            <Link
                                                                to={`/dashboard/pay/${order._id}`}
                                                            >
                                                                <IconButton>
                                                                    <Payment></Payment>
                                                                </IconButton>
                                                            </Link>
                                                        </Tooltip>
                                                    )}
                                                    <Tooltip title="Delete">
                                                        <IconButton
                                                            onClick={() =>
                                                                handleDelete(
                                                                    order._id
                                                                )
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
                            <TablePagination
                                component="div"
                                count={count}
                                page={page}
                                onPageChange={handleChangePage}
                                rowsPerPage={rowsPerPage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </>
                    )}
                </Box>
            </Grid>
            {/*  <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div> */}
        </>
    );
};

export default MyOrders;
