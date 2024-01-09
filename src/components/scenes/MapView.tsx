import MapWrapper from "../MapWrapper";
import Box from "@mui/material/Box";
import { Device } from "../Device";
import { useEffect, useState } from "react";

const MapView: React.FC = () => {
  const [devices, setDevices] = useState<Device[]>([]);

  useEffect(() => {
    
    const fetchSeenDevices = async () => {
      try {
        const response = await fetch("http://findo.armata.info:3001/seenDevices");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setDevices(jsonData);
      } catch (err) {
        console.error("Fetch seen devices error:", err);
        return null;
      }
    };

    fetchSeenDevices();
  });

  return (
    <Box m="20px">
      <MapWrapper devices={devices} width="82vw" height="95vh" />
    </Box>
  );
};

export default MapView;
