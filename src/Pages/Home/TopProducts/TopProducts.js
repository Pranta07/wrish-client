import {
    Container,
    Grid,
    IconButton,
    ImageListItemBar,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import "./TopProducts.css";

const TopProducts = () => {
    const [watches, setWatches] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://wrish.up.railway.app/watches?page=1&&productCount=4`)
            .then((res) => res.json())
            .then((data) => {
                setWatches(data.products);
                setIsLoading(false);
            });
    }, []);
    return (
        <Container>
            <Typography
                variant="h4"
                sx={{ fontWeight: "bold", fontFamily: "Monospace", my: 2 }}
            >
                TOP COLLECTIONS
            </Typography>
            <Typography variant="p" sx={{ my: 2 }}>
                BE THE FIRST TO GET LIMITED EDITIONS
            </Typography>
            <Box sx={{ width: "30%", mx: "auto", mb: 2 }}>
                <hr />
            </Box>
            {isLoading && (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <CircularProgress />
                </Box>
            )}
            <Box>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {watches.map((item) => (
                        <Grid item xs={4} sm={4} md={3} key={item._id}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        className="card-img"
                                        component="img"
                                        image={item.img}
                                        alt="watch-image"
                                    />
                                    <ImageListItemBar
                                        sx={{
                                            background:
                                                "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                                                "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                                        }}
                                        position="top"
                                        actionIcon={
                                            <IconButton
                                                sx={{ color: "white" }}
                                                aria-label={`star ${item.title}`}
                                            >
                                                <FavoriteIcon />
                                            </IconButton>
                                        }
                                        actionPosition="left"
                                    />

                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h6"
                                            component="div"
                                            sx={{
                                                fontWeight: "bold",
                                                fontFamily: "Monospace",
                                            }}
                                        >
                                            {item.name.toUpperCase()}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            {item.desc.slice(0, 50)}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Link
                                        to={`purchase/${item._id}`}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Button size="small" color="primary">
                                            Buy Now
                                        </Button>
                                    </Link>
                                    <Button
                                        variant="text"
                                        size="small"
                                        color="secondary"
                                        sx={{ ms: 3 }}
                                    >
                                        ${item.price}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default TopProducts;
