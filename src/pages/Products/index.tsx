import { Box, Button, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import productImg from "../../assets/products.png";

const ProductsPage = () => {
  const [product, setProduct] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=6");
      const parsedResponse = await response.json();
      setProduct(parsedResponse);
      console.log(parsedResponse);
    } catch (error) {
      console.log("error finding product", error);
    }
  };

  return (
    <Box sx={{ backgroundColor: theme.palette.success.main }}>
      <Typography variant="h1" sx={{ color: theme.palette.primary.main }}>
        Products
      </Typography>
      <Box>
        <img src={productImg} alt="" />
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <Button>Electronics</Button>
        <Button>Jewelry</Button>
        <Button>Womens's Clothes</Button>
        <Button>Men's Clothes</Button>
      </Box>
    </Box>
  );
};

export default ProductsPage;
