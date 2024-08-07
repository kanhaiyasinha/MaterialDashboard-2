import PropTypes from "prop-types";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

const Customer = ({ image, name }) => (
  <MDBox display="flex" alignItems="center" lineHeight={1}>
    <MDAvatar src={image} name={name} size="sm" />
    <MDBox ml={2} lineHeight={1}>
      <MDTypography display="block" variant="button" fontWeight="medium">
        {name}
      </MDTypography>
    </MDBox>
  </MDBox>
);

Customer.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default function data() {
  return {
    columns: [
      { Header: "Customer", accessor: "customer", width: "45%", align: "left" },
      { Header: "Order No.", accessor: "orderNo", align: "center" },
      { Header: "Amount", accessor: "amount", align: "center" },
      { Header: "Status", accessor: "status", align: "center" },
    ],

    rows: [
      {
        customer: <Customer image={team2} name="John Michael" />,
        orderNo: (
          <MDTypography component="span" variant="caption" color="text" fontWeight="medium">
            #123456
          </MDTypography>
        ),
        amount: (
          <MDTypography component="span" variant="caption" color="text" fontWeight="medium">
            $500
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Delivered" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        customer: <Customer image={team3} name="Alexa Liras" />,
        orderNo: (
          <MDTypography component="span" variant="caption" color="text" fontWeight="medium">
            #123457
          </MDTypography>
        ),
        amount: (
          <MDTypography component="span" variant="caption" color="text" fontWeight="medium">
            $1500
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Delivered" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        customer: <Customer image={team4} name="Laurent Perrier" />,
        orderNo: (
          <MDTypography component="span" variant="caption" color="text" fontWeight="medium">
            #123458
          </MDTypography>
        ),
        amount: (
          <MDTypography component="span" variant="caption" color="text" fontWeight="medium">
            $800
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Cancelled" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        customer: <Customer image={team3} name="Michael Levi" />,
        orderNo: (
          <MDTypography component="span" variant="caption" color="text" fontWeight="medium">
            #123459
          </MDTypography>
        ),
        amount: (
          <MDTypography component="span" variant="caption" color="text" fontWeight="medium">
            $300
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Cancelled" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        customer: <Customer image={team4} name="Miriam Eric" />,
        orderNo: (
          <MDTypography component="span" variant="caption" color="text" fontWeight="medium">
            #123460
          </MDTypography>
        ),
        amount: (
          <MDTypography component="span" variant="caption" color="text" fontWeight="medium">
            $2000
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Delivered" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        customer: <Customer image={team4} name="Miriam Eric" />,
        orderNo: (
          <MDTypography component="span" variant="caption" color="text" fontWeight="medium">
            #123460
          </MDTypography>
        ),
        amount: (
          <MDTypography component="span" variant="caption" color="text" fontWeight="medium">
            $2000
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Delivered" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
    ],
  };
}
