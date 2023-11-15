import { Box, Button, Typography } from "@mui/material";
import GiftsImg from "../assets/Gifts.png";
import heroImg from "../assets/hero-image.jpg";
import CartDrawer from "../components/CartDrawer";

const HomePage = () => {
  return (
    <Box sx={{ display: "flex", overflow: "hidden", height: "55rem" }}>
      <Box
        width="60%"
        sx={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPositionY: -600,
        }}
      ></Box>
      <Box
        width="40%"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          backgroundColor: "#e4dcd3",
          paddingX: 8,
          paddingY: 12,
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            color: "#A74737",
            fontFamily: "fantasy",

            fontSize: "4.5rem",
            lineHeight: "5.5rem",
          }}
        >
          The perfect gift when nothing else will do.
        </Typography>
        <Typography variant="h4" sx={{ color: "#A74737" }}>
          Browse our range of products for the best holiday season deals,
          delivered right to your door
        </Typography>
        <Box sx={{ display: "flex", py: 2, gap: 8 }}>
          <Button sx={{ color: "#A74737" }}> Products</Button>
          <CartDrawer />
        </Box>
        <Box>
          <img src={GiftsImg} alt="" height={200} />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
