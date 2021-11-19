import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Alert, Button, CircularProgress } from "@mui/material";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = ({ order }) => {
    const [error, setError] = useState();
    const [clientSecret, setClientSecret] = useState();
    const [success, setSuccess] = useState("");
    const [processing, setProcessing] = useState(false);

    const stripe = useStripe();
    const elements = useElements();
    const { productPrice, name, _id } = order;
    const { user } = useAuth();

    //geting client secret from server side api
    useEffect(() => {
        fetch(
            "https://frozen-inlet-30875.herokuapp.com/create-payment-intent",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ price: productPrice }),
            }
        )
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [productPrice]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement); //geting CardElement form data

        if (card == null) {
            return;
        }

        setProcessing(true); //payment proccessing

        // Use your card Element with other Stripe.js APIs/payment method
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            setError(error.message);
            setSuccess("");
            setProcessing(false);
        } else {
            setError("");
            console.log(paymentMethod);
        }

        //payment confirmation/payment intent
        const { paymentIntent, error: intentError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: user.email,
                    },
                },
            });

        if (intentError) {
            setError(intentError.message);
            setSuccess("");
        } else {
            setError("");
            setSuccess("Your Payment Processed Successfully!");
            setProcessing(false);
            console.log(paymentIntent);

            //save to db
            const payment = {
                amount: paymentIntent.amount,
                id: paymentIntent.id,
                status: paymentIntent.status,
            };
            fetch(
                `https://frozen-inlet-30875.herokuapp.com/pay/orders/${_id}`,
                {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(payment),
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                {processing ? (
                    <CircularProgress></CircularProgress>
                ) : (
                    <Button
                        variant="contained"
                        type="submit"
                        disabled={!stripe || success.length !== 0}
                    >
                        Pay ${productPrice}
                    </Button>
                )}
            </form>
            {error && (
                <Alert severity="error" sx={{ my: 2 }}>
                    {error}!
                </Alert>
            )}
            {success && (
                <Alert severity="success" sx={{ my: 2 }}>
                    {success}
                </Alert>
            )}
        </>
    );
};

export default CheckoutForm;
