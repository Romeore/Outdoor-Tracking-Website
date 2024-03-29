import * as React from "react";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import "./DataGridCardStyle.css";
import { Device } from "../Device";
import Header from "../Header";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
    renderCell: (params: GridRenderCellParams) => (
      <div className="gridCell gridCell-id">{params.value}</div>
    ),
  },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    renderCell: (params: GridRenderCellParams) => (
      <div className="gridCell gridCell-name">{params.value}</div>
    ),
  },
  {
    field: "location",
    headerName: "Position",
    width: 400,
    renderCell: (
      params: GridRenderCellParams<{ latitude: number; longitude: number }>
    ) => (
      <div className="gridCell gridCell-position">
        {`Latitude: ${params.value.latitude}, Longitude: ${params.value.longitude}`}
      </div>
    ),
  },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params: GridRenderCellParams<Device>) => {
      let bgColor;
      switch (params.row.status) {
        case "Seen":
          bgColor = "green";
          break;
        case "Missing":
          bgColor = "red";
          break;
        case "Repair":
          bgColor = "orange";
          break;
        default:
          bgColor = ""; // Use an empty string for the default
      }

      return (
        <div
          style={{
            backgroundColor: bgColor,
            color: "#FFF",
            width: "100%",
            textAlign: "center",
            lineHeight: "30px",
            borderRadius: "4px",
          }}
        >
          {params.row.status}
        </div>
      );
    },
  },
];

const DeviceGrid: React.FC = () => {
  const [devices, setDevices] = useState<Device[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://findo.armata.info:3001/devices');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData: Device[] = await response.json();
  
        const distinctDevices = Array.from(new Set(jsonData.map((device: Device) => device.id)))
                                     .map(id => jsonData.find((device: Device) => device.id === id))
                                     .filter((device): device is Device => device !== undefined);
        setDevices(distinctDevices);
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };
  
    fetchData();
  }, []);

  return (
    <Box m="20px">
      <div className="gridTitleContainer">
        <Header title="Devices" subtitle="Devices list" />
      </div>
      <div className="dataGridContainer">
        <DataGrid rows={devices} columns={columns} getRowId={(row) => row.id} />
      </div>
    </Box>
  );
};

export default DeviceGrid;
