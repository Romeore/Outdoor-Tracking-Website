import MapWrapper from "../MapWrapper";
import Box from "@mui/material/Box";
import { Device } from "../Device";
import { useEffect, useState } from "react";

const MapView: React.FC = () => {
  const [devices, setDevices] = useState<Device[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/seenDevices")
      .then((response) => response.json())
      .then((data) => setDevices(data));
  });

  return (
    <Box m="20px">
      <MapWrapper devices={devices} width="82vw" height="95vh" />
    </Box>
  );
};

export default MapView;
