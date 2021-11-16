import { Description } from "@mui/icons-material";
import {
    Button,
    Divider,
    InputAdornment,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef, useState } from "react";

const AddProduct = () => {
    const [product, setProduct] = useState({});
    const formRef = useRef();

    const handleAddProduct = (e) => {
        e.preventDefault();
        console.log(product);
        setProduct(product);
        formRef.current.reset();
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const newProduct = { ...product };
        newProduct[name] = e.target.value;
    };
    return (
        <Box
            sx={{
                border: "1px solid gray",
                borderRadius: "5px",
                width: "60%",
                mx: "auto",
            }}
        >
            <Typography variant="h4" sx={{ fontFamily: "Monospace", my: 2 }}>
                Add a Product
            </Typography>
            <Divider />
            <form onSubmit={handleAddProduct} ref={formRef}>
                <TextField
                    required
                    onBlur={handleChange}
                    label="Product Name"
                    name="name"
                    sx={{ width: "70%", my: 1 }}
                />
                <TextField
                    required
                    onBlur={handleChange}
                    label="Product Price"
                    name="price"
                    sx={{ width: "70%", my: 1 }}
                />
                <TextField
                    required
                    onChange={handleChange}
                    name="desc"
                    label="Short Description"
                    multiline
                    rows={4}
                    sx={{ width: "70%", my: 1 }}
                />
                <TextField
                    required
                    onBlur={handleChange}
                    name="imgUrl"
                    label="Img URL"
                    sx={{ width: "70%", my: 1 }}
                />
                <br />
                <Button type="submit" variant="contained" sx={{ my: 2 }}>
                    Add Product
                </Button>
            </form>
        </Box>
    );
};

export default AddProduct;
