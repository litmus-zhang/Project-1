import React, { useEffect, useState } from "react";
// import getEthers from "./getEthers";
// import { Contract, utils } from "ethers";
// import Token from "./contracts/Token.sol/Token.json";
import "./App.css";
import Box from "@mui/material/Box";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import Admin_Modal from "./components/modals/admin";
import Reward_Modal from "./components/modals/reward";

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <NavBar />
      <SideBar /> */}
      <Admin_Modal/>
      
      <Reward_Modal/>
    </Box>
  );
}

export default App;
