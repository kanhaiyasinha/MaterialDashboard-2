import React from "react";
// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import ReviewList from "examples/Lists/ReviewList";
import ComplexNetProfitCard from "examples/Cards/NetProfitCards/ComplexNetProfitCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reviewData from "./customerreview/reviewData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import Goals from "./components/Goals";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox>
          <Grid mb={1.5} container spacing={3}>
            <Grid container spacing={4} item xs={12} md={6} lg={8}>
              <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                  <ComplexStatisticsCard
                    color="dark"
                    icon="weekend"
                    title="Total Orders"
                    count={8999}
                    percentage={{
                      color: "success",
                      amount: "+3%",
                      label: "than last week",
                    }}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                  <ComplexStatisticsCard
                    icon="leaderboard"
                    title="Total Delivered"
                    count="7070"
                    percentage={{
                      color: "error",
                      amount: "-3%",
                      label: "than last month",
                    }}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                  <ComplexStatisticsCard
                    color="success"
                    icon="store"
                    title="Total Cancelled"
                    count="555"
                    percentage={{
                      color: "success",
                      amount: "+1%",
                      label: "than yesterday",
                    }}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                  <ComplexStatisticsCard
                    color="primary"
                    icon="person_add"
                    title="Total Revenue"
                    count="$82k"
                    percentage={{
                      color: "error",
                      amount: "-3%",
                      label: "Just updated",
                    }}
                  />
                </MDBox>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={1.5}>
                <ComplexNetProfitCard
                  color="success"
                  icon="store"
                  title="Net Profit"
                  count="$6759.25"
                  percentage={{
                    color: "success",
                    amount: "+3%",
                    label: "than yesterday",
                  }}
                  spinner={{
                    amount: "70%",
                    label: "Goal Completed",
                  }}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mt={4.5} mb={3}>
          <Grid container spacing={3}>
            {/* First Chart: Spans 2 out of 3 columns */}
            <Grid item xs={12} md={8}>
              <MDBox>
                <ReportsBarChart color="info" title="Activity" chart={reportsBarChartData} />
              </MDBox>
            </Grid>
            {/* Second Chart: Takes the remaining space */}
            <Grid item xs={12} md={4}>
              <Goals />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} xl={4}>
              <ReviewList title="Customer's Feedback" profiles={reviewData} shadow={false} />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
