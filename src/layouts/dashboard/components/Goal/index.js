import React from "react";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

import KeyboardArrowRightRounded from "@mui/icons-material/KeyboardArrowRightRounded";

function Goal({ color, icon, name }) {
  return (
    <MDBox sx={{ height: "100%" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={1}>
        <MDBox display="flex" alignItems="center">
          <MDBox
            mr={2}
            variant="gradient"
            bgColor={color}
            color={color === "light" ? "dark" : "white"}
            coloredShadow={color}
            // borderRadius="xl"
            borderRadius="50%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="2.6rem"
            height="2.6rem"
          >
            <Icon fontSize="small" color="inherit">
              {icon}
            </Icon>
          </MDBox>
          <MDBox display="flex" flexDirection="column">
            <MDTypography variant="button" fontWeight="medium" gutterBottom>
              {name}
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDButton variant="outlined" color="secondary" iconOnly circular size="small">
          <KeyboardArrowRightRounded />
        </MDButton>
      </MDBox>
    </MDBox>
  );
}

// Typechecking props of the Goal component
Goal.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]).isRequired,
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};

export default Goal;
