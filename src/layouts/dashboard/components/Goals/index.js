import React from "react";
// @mui material components
import Card from "@mui/material/Card";
// Import the new icon
import KeyboardArrowRightRounded from "@mui/icons-material/KeyboardArrowRightRounded";
import ModeStandbyRoundedIcon from "@mui/icons-material/ModeStandbyRounded";
import LunchDiningRoundedIcon from "@mui/icons-material/LunchDiningRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// Import Goal component
import Goal from "../Goal";

function Goals() {
  return (
    <Card>
      <MDBox pt={3} pb={2} px={2}>
        <MDBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <MDBox display="flex" flexDirection="column" gap={2}>
            <Goal color="error" icon={<ModeStandbyRoundedIcon />} name="Goals" />
            <Goal color="success" icon={<LunchDiningRoundedIcon />} name="Popular Dishes" />
            <Goal color="dark" icon={<MenuBookRoundedIcon />} name="Menus" />
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default Goals;
