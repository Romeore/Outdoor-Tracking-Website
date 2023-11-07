import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/scenes/Dashboard";
// import DataGridComponent from "./DataGridComponent"; // You need to create this component
import Sidebar from "./components/Sidebar";
import { Box } from "@mui/material";

function App() {
  const drawerWidth = 240;

  return (
    <Router>
      <div
        style={{
          flexGrow: 1,
          paddingLeft: drawerWidth, // or you can use marginLeft if that suits your layout better
          width: `calc(100% - ${drawerWidth}px)`, // Subtract the drawer width from 100% window width
          display: "flex",
          alignItems: "center", // This will center the children horizontally
          justifyContent: "center", // This will center the children vertically
        }}
      >
        <Box
          sx={{
            backgroundColor: "#1F2A40", // use theme colors or specific color codes
            width: "100vw",
            height: "100vh",
            overflow: "hidden", // if you don't want any scrolling
          }}
        >
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/datagrid" element={<DataGridComponent />} /> */}
          </Routes>
        </Box>
      </div>
    </Router>
  );
}

export default App;
