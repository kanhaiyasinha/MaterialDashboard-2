import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React examples
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "./data/authorsTableData";

function Projects() {
  // const { columns, rows } = data();
  const { columns, rows } = authorsTableData();

  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} pl={3}>
        <MDBox>
          <MDTypography variant="h6" gutterBottom>
            Recent Orders
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox pb={3}>
        <DataTable
          table={{ columns, rows }}
          showTotalEntries={false}
          isSorted={false}
          noEndBorder
          entriesPerPage={false}
        />
      </MDBox>
    </Card>
  );
}

export default Projects;
