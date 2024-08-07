import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function ComplexNetProfitCard({ color, title, count, percentage, spinner }) {
  const spinnerValue = parseFloat(spinner.amount.replace("%", ""));

  return (
    <Card height="100%">
      <MDBox display="flex" justifyContent="space-between" py={1} px={2}>
        <MDBox textAlign="left" lineHeight={1.25}>
          <MDTypography variant="button" fontWeight="light" color="text">
            {title}
          </MDTypography>
          <MDTypography variant="h4">{count}</MDTypography>
        </MDBox>
        <MDBox
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="4rem"
          height="4rem"
        >
          <MDBox
            mt={2}
            mr={2}
            variant="gradient"
            bgColor="white"
            color={color === "light" ? "dark" : "white"}
            coloredShadow={color}
            borderRadius="50%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <CircularProgress
              variant="determinate"
              value={spinnerValue}
              onPlay={0.5}
              size={64}
              thickness={6}
              color="primary"
              style={{ borderRadius: "50%" }}
            />
            <MDBox position="absolute" display="flex" alignItems="center" justifyContent="center">
              <MDTypography
                variant="button"
                fontWeight="medium"
                component="div"
                color="textSecondary"
              >
                {`${spinnerValue}%`}
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </MDBox>
      <Divider sx={{ width: "50%", mt: 1, mb: 1 }} />
      <MDBox pb={2} px={2}>
        <MDTypography component="p" variant="button" color="text" display="flex">
          <MDTypography
            component="span"
            variant="button"
            fontWeight="bold"
            color={percentage.color}
          >
            {percentage.amount}
          </MDTypography>
          &nbsp;{percentage.label}
          <MDBox flexGrow={1} textAlign="right">
            <MDTypography component="span" variant="button" color="text">
              {spinner.label}
            </MDTypography>
          </MDBox>
        </MDTypography>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of ComplexNetProfitCard
ComplexNetProfitCard.defaultProps = {
  color: "info",
  percentage: {
    color: "success",
    amount: "+0%",
    label: "",
  },
  spinner: {
    amount: "0%",
    label: "",
  },
};

// Typechecking props for the ComplexNetProfitCard
ComplexNetProfitCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]).isRequired,
    amount: PropTypes.string.isRequired,
    label: PropTypes.string,
  }).isRequired,
  spinner: PropTypes.shape({
    amount: PropTypes.string.isRequired,
    label: PropTypes.string,
  }).isRequired,
};

export default ComplexNetProfitCard;
