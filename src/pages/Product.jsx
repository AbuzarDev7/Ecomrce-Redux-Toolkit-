import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../config/reduxconfig/reducers/cartSlice";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Skeleton,
  Alert
} from "@mui/material";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  
const cart = useSelector(state => state.cart.cart);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const addItemtoRedux = (product) => {
    dispatch(addProduct({ item: product }));
  };


  if (loading) {
    return (
      <Box
        sx={{
          p: 3,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 3,
          mt: 6
        }}
      >
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} sx={{ borderRadius: 3 }}>
            <Skeleton variant="rectangular" height={160} />
            <CardContent>
              <Skeleton width="70%" height={28} />
              <Skeleton width="100%" />
              <Skeleton width="40%" sx={{ mt: 1 }} />
              <Skeleton width="100%" height={40} sx={{ mt: 2 }} />
            </CardContent>
          </Card>
        ))}
      </Box>
    );
  }


  if (error) {
    return (
      <Box sx={{ p: 5 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }
const getQty = (id) => {
  const item = cart.find(p => p.id === id);
  return item ? item.qty : 0;
};

  
  return (
    <Box
      sx={{
        p: 3,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 3,
        mt: 6
      }}
    >
      {products.map((product) => (
        <Card
          key={product.id}
          sx={{
            borderRadius: 3,
            transition: "0.3s",
            "&:hover": {
              boxShadow: 6,
              transform: "translateY(-4px)"
            }
          }}
        >
          <CardMedia
            component="img"
            height="160"
            image={product.thumbnail || "https://via.placeholder.com/300"}
            alt={product.title}
          />

          <CardContent>
            <Typography variant="h6" noWrap>
              {product.title}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ height: 40, overflow: "hidden" }}
            >
              {product.description}
            </Typography>

            <Typography sx={{ mt: 1, fontWeight: 600 }}>
              ${product.price}
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 2
              }}
            >
              {/* Quantity Button (Static) */}
              <Button
                variant="outlined"
                size="small"
                sx={{
                  minWidth: 90,
                  borderRadius: 20,
                  fontWeight: 600
                }}
              >
                Qty :{getQty(product.id)}
              </Button>

              {/* Add to Cart */}
              <Button
                size="small"
                variant="contained"
                onClick={() => addItemtoRedux(product)}
               >
                Add to Cart
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Product;
