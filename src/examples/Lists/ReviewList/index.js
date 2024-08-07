import React from "react";
// react-routers components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import CustomRating from "components/MDRating/CustomRating"; // Import the custom Rating component

function ReviewList({ title, profiles, shadow }) {
  const renderProfiles = profiles.map(({ image, name, description, rating }, index) => (
    <React.Fragment key={name}>
      <MDBox component="li" display="flex" alignItems="center" py={1} mb={1}>
        <MDBox mr={2}>
          <MDAvatar src={image} alt={name} shadow="md" />
        </MDBox>
        <MDBox
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
        >
          <MDTypography variant="button" fontWeight="medium">
            {name}
          </MDTypography>
          <CustomRating mt={0.5} mb={0.5} name={`rating-${name}`} value={rating} readOnly />
          <MDTypography variant="caption" color="text" mt={0.5} mb={0.5}>
            {description}
          </MDTypography>
        </MDBox>
      </MDBox>
      {index < profiles.length - 1 && <Divider sx={{ width: "100%", mt: 0.5, mb: 0.5 }} />}
    </React.Fragment>
  ));

  return (
    <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
      <MDBox pt={2} px={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderProfiles}
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default props for the ReviewList
ReviewList.defaultProps = {
  shadow: true,
};

// Typechecking props for the ReviewList
ReviewList.propTypes = {
  title: PropTypes.string.isRequired,
  profiles: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
  shadow: PropTypes.bool,
};

export default ReviewList;
