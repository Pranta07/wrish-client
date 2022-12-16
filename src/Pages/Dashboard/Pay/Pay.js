import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
    "pk_test_51JxEP3G2Q6NIMWKgyocynBOfS4ZCyR4h0d4wRN9okYqGu9xzy43wt2IrGwPRg8QsejYCMD43xc82JqHy3VD9rp6F005hWMtXsW"
);

const Pay = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState();

    useEffect(() => {
        fetch(`https://wrish.up.railway.app/pay/${orderId}`)
            .then((res) => res.json())
            .then((order) => {
                setOrder(order);
            });
    }, [orderId]);

    return (
        <Box sx={{ backgroundColor: "white", p: 5 }}>
            <Typography
                variant="h4"
                sx={{ fontFamily: "Monospace", py: 1, color: "black" }}
            >
                Pay for {order?.productName}. Price ${order?.productPrice}
            </Typography>
            {order?.productPrice && (
                <Elements stripe={stripePromise}>
                    <CheckoutForm order={order} />
                </Elements>
            )}
        </Box>
    );
};

export default Pay;
