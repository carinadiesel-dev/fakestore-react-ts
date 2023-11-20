import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 4,
      }}
    >
      <Typography variant="body1">
        &copy; Christmas Store | Designed & Developed by Carina Diesel
      </Typography>
    </Box>
  );
};

export default Footer;
