import { useMemo, useState } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-chartjs-2 components
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// ReportsBarChart configurations
import configs from "examples/Charts/BarCharts/ReportsBarChart/configs";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ReportsBarChart({ color, title, chart }) {
  const { data, options } = configs(chart.labels || [], chart.datasets || {});

  const [dropdownValue, setDropdownValue] = useState("Option 1");

  const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value);
  };

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox padding="1rem">
        {useMemo(
          () => (
            <MDBox
              variant="gradient"
              bgColor={color}
              borderRadius="lg"
              coloredShadow={color}
              py={2}
              pr={0.5}
              mt={-5}
              height="12.5rem"
            >
              <Bar data={data} options={options} redraw />
            </MDBox>
          ),
          [color, chart]
        )}
        <MDBox
          pt={2}
          pb={1}
          px={1}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <MDTypography variant="h6" textTransform="capitalize">
            {title}
          </MDTypography>
          <Select
            value={dropdownValue}
            onChange={handleDropdownChange}
            variant="outlined"
            size="small"
            color="info"
            sx={{
              minWidth: 90, // Set the minimum width
              height: 30, // Set the height
              fontSize: "0.675rem", // Adjust the font size
              padding: "0.4rem 0.60rem", // Adjust the padding
            }}
          >
            <MenuItem value="Option 1">Weekly</MenuItem>
            <MenuItem value="Option 2">Monthly</MenuItem>
            <MenuItem value="Option 3">Yearly</MenuItem>
          </Select>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of ReportsBarChart
ReportsBarChart.defaultProps = {
  color: "info",
  description: "",
};

// Typechecking props for the ReportsBarChart
ReportsBarChart.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  date: PropTypes.string.isRequired,
  chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
};

export default ReportsBarChart;
