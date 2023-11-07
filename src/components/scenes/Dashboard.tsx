// Dashboard.tsx
import React, { useEffect, useState } from "react";
import StatusBox from "../StatusBox";
import MapWrapper from "../MapWrapper";
import "../StatusBox.css"; 
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RuleIcon from "@mui/icons-material/Rule";
import ConstructionIcon from "@mui/icons-material/Construction";
import Box from "@mui/material/Box";
import Header from "../Header";
import { Device } from '../Device'; 

interface DevicesInfo {
  total: number;
  seen: number;
  missing: number;
  repair: number;
}

const initialPosition: L.LatLngExpression = [51.505, -0.09]; // Thomas More, Geel
const zoomLevel: number = 13;

const Dashboard: React.FC = () => {
  const [devicesInfo, setDevicesInfo] = useState<DevicesInfo | null>(null);
  

  const devices: Device[] = [
    {
      id: "1",
      name: "Device 1",
      location: {
        latitude: 51.1614,
        longitude: 4.9654,
      },
      status: "Seen",
    },
    {
      id: "2",
      name: "Device 2",
      location: {
        latitude: 51.1624,
        longitude: 4.9644,
      },
      status: "Seen",
    },
    // ... more devices
  ];

  useEffect(() => {
    // TODO: Replace with your backend API endpoint

    setDevicesInfo({ total: 4, seen: 2, missing: 1, repair: 1 });
    // fetch('/api/gps-data')
    //   .then(response => response.json())
    //   .then(data => setDeviceData(data));
  }, []);

  if (!devicesInfo) {
    return <div>Loading...</div>;
  }

  return (
    <Box m="20px">
      <Header title="IoT Dashboard" subtitle="Welcome to your dashboard" />
      <Box display="flex" alignItems="center" justifyContent="center">
        <StatusBox
          title="Total Devices"
          count={devicesInfo.total}
          icon={<FormatListNumberedIcon />}
        />
        <StatusBox
          title="Seen Devices"
          count={devicesInfo.seen}
          icon={<LocationOnIcon />}
        />
        <StatusBox
          title="Missing Devices"
          count={devicesInfo.missing}
          icon={<RuleIcon />}
        />
        <StatusBox
          title="Devices in Repair"
          count={devicesInfo.repair}
          icon={<ConstructionIcon />}
        />
      </Box>
      <Box p="20px" m="20px" maxHeight="200px" height="200px" width="75vw">
        <MapWrapper devices={devices} width="78vw" height="50vh"/>
      </Box>
    </Box>
  );
};

export default Dashboard;
