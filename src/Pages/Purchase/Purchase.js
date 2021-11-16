import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Container,
    Grid,
    IconButton,
    ImageListItemBar,
    InputAdornment,
    Rating,
    TextField,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
import useAuth from "../../hooks/useAuth";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Description, MailOutline, Phone } from "@mui/icons-material";
import Swal from "sweetalert2";

const Purchase = () => {
    const [product, setProduct] = useState();
    const { id } = useParams();
    const { user } = useAuth();
    const [orderDetails, setOrderDetials] = useState({
        name: user.displayName,
        email: user.email,
    });
    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:5000/purchase/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [id]);

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        // console.log(orderDetails);
        orderDetails.productName = product.name;
        orderDetails.productPrice = product.price;
        orderDetails.productImg = product.img;

        //send orderdetails data to server
        fetch("http://localhost:5000/orders", {
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
                        title: product.name,
                        imageUrl: product.img,
                        imageWidth: 300,
                        imageHeight: 200,
                        imageAlt: "Custom image",
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
        <Container>
            <Card
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2,1fr)",
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
                            title={product?.name.toUpperCase()}
                            position="bottom"
                            actionIcon={
                                <Box sx={{ marginLeft: "10px" }}>
                                    <FavoriteIcon sx={{ color: "white" }} />
                                </Box>
                            }
                            actionPosition="left"
                        />
                    </CardActionArea>
                </Box>
                <Box>
                    <CardContent
                        sx={{
                            flex: "1 0 auto",
                            padding: "20px",
                            justifyContent: "left",
                        }}
                    >
                        <Rating
                            name="read-only"
                            value={4}
                            readOnly
                            size="small"
                        />
                        <Typography component="div" variant="h5">
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
                    </CardContent>

                    <form onSubmit={handlePlaceOrder}>
                        <TextField
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
                            sx={{ width: "75%" }}
                        />
                        <TextField
                            disabled
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
                            sx={{ width: "75%", my: 1 }}
                        />
                        <TextField
                            onBlur={handleChange}
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
                            sx={{ width: "75%", my: 1 }}
                        />
                        <TextField
                            onBlur={handleChange}
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
                            sx={{ width: "75%", my: 1 }}
                        />
                        <br />
                        <Button type="submit" variant="contained">
                            Place Order
                        </Button>
                    </form>
                </Box>
            </Card>
        </Container>
    );
};

export default Purchase;
