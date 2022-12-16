import {
    Button,
    Card,
    CardActionArea,
    CardMedia,
    Container,
    Grid,
    ImageListItemBar,
    InputAdornment,
    Rating,
    TextField,
    Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
import useAuth from "../../hooks/useAuth";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Description, MailOutline, Phone } from "@mui/icons-material";
import Swal from "sweetalert2";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer";
import Page from "../Page/Page";

const Purchase = () => {
    const [product, setProduct] = useState();
    const { id } = useParams();
    const { user } = useAuth();
    const [orderDetails, setOrderDetials] = useState({
        name: user.displayName,
        email: user.email,
    });
    const history = useHistory();
    const formRef = useRef();

    useEffect(() => {
        fetch(`https://wrish.up.railway.app/purchase/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [id]);

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        // console.log(orderDetails);
        orderDetails.productName = product.name;
        orderDetails.productPrice = product.price;
        orderDetails.productImg = product.img;
        orderDetails.status = false;

        formRef.current.reset();

        //send orderdetails data to server
        fetch("https://wrish.up.railway.app/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(orderDetails),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: product.name,
                        /* imageUrl: product.img,
                        imageWidth: 300,
                        imageHeight: 200,
                        imageAlt: "Custom image", */
                        text: "Your Order Placed Successfully",
                        timer: 2000,
                        showConfirmButton: false,
                    });
                }
            })
            .finally(() => history.push("/watches"));
    };
    const handleChange = (e) => {
        const newDetails = { ...orderDetails };
        const name = e.target.name;
        newDetails[name] = e.target.value;
        setOrderDetials(newDetails);
        // console.log(name, newDetails);
    };

    return (
        <Page title="Purchase">
            <Box>
                <Navigation />
                <Container>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        <Grid item xs={4} sm={8} md={6}>
                            <Card
                                sx={{
                                    // display: "grid",
                                    // gridTemplateColumns: "repeat(2,1fr)",
                                    boxShadow: 1,
                                    padding: "16px",
                                    my: 3,
                                }}
                            >
                                <Box>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="400"
                                            image={product?.img}
                                            alt="watch"
                                        />
                                        <ImageListItemBar
                                            title={
                                                <Typography
                                                    variant="h4"
                                                    sx={{
                                                        fontFamily: "Monospace",
                                                        py: 1,
                                                    }}
                                                >
                                                    {product?.name.toUpperCase()}
                                                </Typography>
                                            }
                                            position="bottom"
                                            actionIcon={
                                                <Box
                                                    sx={{ marginLeft: "10px" }}
                                                >
                                                    <FavoriteIcon
                                                        sx={{
                                                            color: "white",
                                                            width: "40px",
                                                            height: "40px",
                                                        }}
                                                    />
                                                </Box>
                                            }
                                            actionPosition="left"
                                        />
                                    </CardActionArea>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item xs={4} sm={8} md={6}>
                            <Box sx={{ m: 5 }}>
                                <Typography
                                    component="div"
                                    variant="h4"
                                    sx={{ fontFamily: "Monospace" }}
                                >
                                    Price: ${product?.price}
                                </Typography>
                                <hr />
                                <Typography
                                    variant="subtitle1"
                                    component="div"
                                    color="text.secondary"
                                >
                                    {product?.desc.slice(0, 80)}
                                </Typography>
                                <Rating
                                    name="read-only"
                                    value={4}
                                    readOnly
                                    size="small"
                                />

                                <form onSubmit={handlePlaceOrder} ref={formRef}>
                                    <TextField
                                        required
                                        onBlur={handleChange}
                                        disabled
                                        defaultValue={user.displayName}
                                        label="Name"
                                        name="name"
                                        variant="standard"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircle />
                                                </InputAdornment>
                                            ),
                                        }}
                                        sx={{
                                            width: {
                                                xs: "90%",
                                                sm: "80%",
                                                md: "70%",
                                            },
                                        }}
                                    />
                                    <TextField
                                        disabled
                                        required
                                        onBlur={handleChange}
                                        defaultValue={user.email}
                                        label="Email"
                                        name="email"
                                        variant="standard"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <MailOutline></MailOutline>
                                                </InputAdornment>
                                            ),
                                        }}
                                        sx={{
                                            width: {
                                                xs: "90%",
                                                sm: "80%",
                                                md: "70%",
                                            },
                                            my: 1,
                                        }}
                                    />
                                    <TextField
                                        onBlur={handleChange}
                                        required
                                        name="address"
                                        label="Address"
                                        variant="standard"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Description></Description>
                                                </InputAdornment>
                                            ),
                                        }}
                                        sx={{
                                            width: {
                                                xs: "90%",
                                                sm: "80%",
                                                md: "70%",
                                            },
                                            my: 1,
                                        }}
                                    />
                                    <TextField
                                        onBlur={handleChange}
                                        required
                                        name="phone"
                                        label="Phone"
                                        variant="standard"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Phone></Phone>
                                                </InputAdornment>
                                            ),
                                        }}
                                        sx={{
                                            width: {
                                                xs: "90%",
                                                sm: "80%",
                                                md: "70%",
                                            },
                                            my: 1,
                                        }}
                                    />
                                    <br />
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{ my: 2 }}
                                    >
                                        Place Order
                                    </Button>
                                </form>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
                <Footer />
            </Box>
        </Page>
    );
};

export default Purchase;
