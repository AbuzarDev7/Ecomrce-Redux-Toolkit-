import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Card, CardContent, CardMedia, Typography, Button, IconButton } from "@mui/material";
import { addProduct } from "../config/reduxconfig/reducers/cartSlice";
import DeleteIcon from "@mui/icons-material/Delete";

const SingleCart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const increaseQty = (product) => {
    dispatch(addProduct({ item: product }));
  };

  const removeItem = (id) => {
  
    console.log("Remove item with id:", id);
  };

  if (cart.length === 0) {
    return (
      <Box sx={{ p: 5, textAlign: "center", fontSize: 20 }}>
        Your cart is empty 
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3, display: "flex", flexDirection: "column", gap: 2 }}>
      {cart.map((product) => (
        <Card
          key={product.id}
          sx={{
            display: "flex",
            borderRadius: 2,
            boxShadow: 2,
            "&:hover": { boxShadow: 4 },
            overflow: "hidden",
            width: "100%",
            maxWidth: 700,
            height: 180
          }}
        >

          <CardMedia
            component="img"
            image={product.thumbnail || "https://via.placeholder.com/150"}
            alt={product.title}
            sx={{ width: 180, objectFit: "cover" }}
          />

       
          <CardContent sx={{ flexGrow: 1, p: 2, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize: 16 }} noWrap>
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: 13, mt: 0.5, height: 48, overflow: "hidden" }}>
                {product.description}
              </Typography>
              <Typography sx={{ fontWeight: 600, fontSize: 14, mt: 1 }}>
                ${product.price} x {product.qty} = ${product.price * product.qty}
              </Typography>
            </Box>

          
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Button
                size="small"
                variant="outlined"
                sx={{ minWidth: 60, borderRadius: 20, fontSize: 12 }}
              >
                Qty: {product.qty}
              </Button>
              <Button
                size="small"
                variant="contained"
                sx={{ fontSize: 12, px: 1 }}
                onClick={() => increaseQty(product)}
              >
                + Add
              </Button>
              <IconButton
                size="small"
                color="error"
                onClick={() => removeItem(product.id)}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default SingleCart;
