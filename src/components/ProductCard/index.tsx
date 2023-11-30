import { AddShoppingCart } from "@mui/icons-material";
import { Box, Button, useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";

type RecipeReviewCardProps = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: any;
};

export default function RecipeReviewCard({
  id,
  title,
  price,
  category,
  description,
  image,
}: RecipeReviewCardProps) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const theme = useTheme();

  return (
    <Card
      sx={{
        minHeight: 400,
        width: "28%",
        display: "flex",
        alignItems: "center",
        justifyContent: "stretch",
        flexDirection: "column",
        border: `2px solid ${theme.palette.primary.main}`,
        paddingY: 2,
        my: 4,
      }}
    >
      <CardHeader title={title} sx={{ height: "5rem" }} />
      <Box sx={{ paddingTop: 4 }}>
        <CardMedia
          component="img"
          image={image}
          sx={{ maxHeight: "20rem", objectFit: "cover" }}
        />
      </Box>

      <CardContent sx={{ maxWidth: "20rem", pt: 4 }}>
        <Typography
          variant="h5"
          color={theme.palette.primary.main}
          noWrap
          paragraph
        >
          $ {price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box sx={{ width: "100%" }}>
          <Button
            sx={{
              color: theme.palette.primary.main,
              border: `2px solid ${theme.palette.primary.main}`,
              width: "100%",
              fontWeight: "bold",
              px: 3,
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: "white",
              },
            }}
            endIcon={<AddShoppingCart />}
          >
            Add to Cart
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
