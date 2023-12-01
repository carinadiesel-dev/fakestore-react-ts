import { Box, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

export default function Electronics() {
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
        Electronics
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          items: "center",
          justifyContent: "space-around",
          gap: 0,
        }}
      >
        {product?.map((el: any, index) => {
          return (
            <ProductCard
              category={el.category}
              description={el.description}
              id={el.id}
              image={el.image}
              price={el.price}
              title={el.title}
              key={index}
            ></ProductCard>
          );
        })}
      </Box>
    </Box>
  );
}
