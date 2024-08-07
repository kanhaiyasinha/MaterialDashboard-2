import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";

// Custom styled Rating component
const CustomRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-icon": {
    fontSize: "1rem", // Smaller size
  },
  "& .MuiRating-iconEmpty": {
    color: theme.palette.action.disabled,
  },
  "& .MuiRating-iconFilled": {
    color: theme.palette.primary.main,
  },
  "& .MuiRating-iconHover": {
    color: theme.palette.primary.dark,
  },
  "& .MuiRating-iconSvg": {
    borderRadius: "50%", // Circular edges
  },
}));

export default CustomRating;
