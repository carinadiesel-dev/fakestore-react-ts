import { Store } from "@mui/icons-material";
import { Box, Button, Typography, useTheme } from "@mui/material";
import GiftsImg from "../assets/Gifts.png";
import heroImg from "../assets/hero-image.jpg";

const HomePage = () => {
  const theme = useTheme();
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
          backgroundColor: theme.palette.success.main,
          padding: 8,
          justifyContent: "space-around",
        }}
      >
        <Typography
          sx={{
            color: theme.palette.error.main,
            fontFamily: "fantasy",
            fontSize: "4.3rem",
            lineHeight: "5.5rem",
          }}
        >
          The perfect gift when nothing else will do.
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontSize: "1.8rem", color: theme.palette.error.main }}
        >
          Browse our range of products for the best holiday season deals,
          delivered right to your door
        </Typography>
        <Button
          endIcon={<Store />}
          sx={{
            backgroundColor: theme.palette.error.main,
            color: "white",
            fontWeight: "bold",
            px: 4,
            py: 1.5,

            "&:hover": {
              backgroundColor: theme.palette.primary.main,
            },
          }}
        >
          Shop Now
        </Button>
        <Box>
          <img src={GiftsImg} alt="" height={200} />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
