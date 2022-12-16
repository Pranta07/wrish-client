import { Button, Divider, Input, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
    const [product, setProduct] = useState({});
    const [image, setImage] = useState(null);
    const formRef = useRef();
    // console.log(image);

    const handleAddProduct = (e) => {
        e.preventDefault();
        // console.log(product);

        if (!image) return;

        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("price", product.price);
        formData.append("desc", product.desc);
        formData.append("img", image);

        //https://wrish.up.railway.app/watches
        //http://localhost:5000/watches
        fetch("https://wrish.up.railway.app/watches", {
            method: "POST",
            // headers: {
            //     "content-type": "application/json",
            // },
            // body: JSON.stringify(product),
            body: formData,
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    Swal.fire(
                        "Success",
                        "Product Added Successfullly!",
                        "success"
                    );
                }
            });
        formRef.current.reset();
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const newProduct = { ...product };
        newProduct[name] = e.target.value;
        setProduct(newProduct);
    };
    return (
        <Box
            sx={{
                border: "1px solid gray",
                borderRadius: "5px",
                width: { xs: "95%", sm: "95%", md: "60%" },
                mx: "auto",
                backgroundColor: "#F4F8FF",
                opacity: 0.9,
            }}
        >
            <Typography variant="h4" sx={{ fontFamily: "Monospace", my: 2 }}>
                Add a Product
            </Typography>
            <Divider />
            <form onSubmit={handleAddProduct} ref={formRef}>
                <TextField
                    variant="standard"
                    required
                    onBlur={handleChange}
                    label="Product Name"
                    name="name"
                    sx={{
                        width: { xs: "90%", sm: "90%", md: "70%" },
                        my: 1,
                        py: 1,
                    }}
                />
                <TextField
                    variant="standard"
                    required
                    onBlur={handleChange}
                    label="Product Price"
                    name="price"
                    sx={{
                        width: { xs: "90%", sm: "90%", md: "70%" },
                        mb: 1,
                        py: 1,
                    }}
                />
                <TextField
                    variant="standard"
                    required
                    onChange={handleChange}
                    name="desc"
                    label="Short Description"
                    multiline
                    rows={4}
                    sx={{
                        width: { xs: "90%", sm: "90%", md: "70%" },
                        mb: 1,
                        py: 1,
                    }}
                />
                {/* <TextField
                    variant="standard"
                    required
                    onBlur={handleChange}
                    name="img"
                    label="Img URL"
                    sx={{
                        width: { xs: "90%", sm: "90%", md: "70%" },
                        mb: 1,
                        py: 1,
                    }}
                />
                <br /> */}
                <Input
                    required
                    accept="image/*"
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    sx={{
                        width: { xs: "90%", sm: "90%", md: "70%" },
                        mb: 1,
                        py: 1,
                    }}
                />
                <br />
                <Button type="submit" variant="contained" sx={{ my: 2, px: 4 }}>
                    Add Product
                </Button>
            </form>
        </Box>
    );
};

export default AddProduct;
