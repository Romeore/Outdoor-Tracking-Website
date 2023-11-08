import MapWrapper from "../MapWrapper";
import Box from "@mui/material/Box";
import { Device } from '../Device'; 


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
const MapView: React.FC = () => {

    return (
        <Box m="20px">
            <MapWrapper devices={devices} width="82vw" height="95vh" />
        </Box>
      );

}

export default MapView;