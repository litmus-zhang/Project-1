import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SideBarItem from "./sidebaritem";
import { ReactComponent as DashBoard } from "../images/dashboard.svg";
import { ReactComponent as Tickets } from "../images/ticket.svg";
import { ReactComponent as Bell } from "../images/bell.svg";
import { ReactComponent as Person } from "../images/person.svg";
import { ReactComponent as System } from "../images/system.svg";
import { ReactComponent as Stats } from "../images/stats.svg";

function SideBar(props) {
  return (
    <Box
      sx={{
        height: "calc(100vh - 130px)",
        backgroundColor: "#C6D4FF",
        width: "200.86px",
        color: "black",
        padding: "32px 0px 0px 0px",
        borderTop: "1px solid #C4C4C4",
      }}
    >
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "16.94px",
          marginBottom: "8.44px",
          paddingLeft: "24px",
        }}
      >
        GENERAL
      </Typography>
      <SideBarItem text={"Dashboard"} icon={<DashBoard />} />
      <SideBarItem text={"Tickets"} icon={<Tickets />} />
      <SideBarItem text={"Orders"} icon={<Person />} />
      <SideBarItem text={"Movie Stats"} icon={<Stats />} />
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "16.94px",
          marginBottom: "8.44px",
          marginTop: "20.44px",
          paddingLeft: "24px",
        }}
      >
        ADMIN
      </Typography>
      <SideBarItem text={"Admins"} icon={<Person />} />
      <SideBarItem text={"Notification"} icon={<Bell />} />
      <SideBarItem text={"Reward"} icon={<Bell />} />
      <SideBarItem text={"System Health"} icon={<System />} />
    </Box>
  );
}

export default SideBar;
