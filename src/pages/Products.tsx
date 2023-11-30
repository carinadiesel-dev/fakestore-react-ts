import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=3");
      const parsedResponse = await response.json();
      setProduct(parsedResponse);
      console.log(parsedResponse);
    } catch (error) {
      console.log("error finding product", error);
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 8 }}>
      Products
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
  );
};

export default Products;
