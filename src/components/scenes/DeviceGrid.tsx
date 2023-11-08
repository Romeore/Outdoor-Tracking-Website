import * as React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import './DataGridCardStyle.css'; // make sure to create this CSS file and define the styles
import { Device } from '../Device';
import Header from '../Header';
import {Box} from "@mui/material";

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 90,
    renderCell: (params: GridRenderCellParams) => (
      <div className="gridCell gridCell-id">{params.value}</div>
    ),
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    renderCell: (params: GridRenderCellParams) => (
      <div className="gridCell gridCell-name">{params.value}</div>
    ),
  },
  {
    field: 'location',
    headerName: 'Position',
    width: 400,
    renderCell: (params: GridRenderCellParams<{ latitude: number; longitude: number }>) => (
      <div className="gridCell gridCell-position">
        {`Latitude: ${params.value.latitude}, Longitude: ${params.value.longitude}`}
      </div>
    ),
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
    renderCell: (params: GridRenderCellParams<Device>) => { 
      let bgColor;
      switch (params.row.status) { 
        case 'Seen':
          bgColor = 'green';
          break;
        case 'Missing':
          bgColor = 'red';
          break;
        case 'Repair':
          bgColor = 'orange';
          break;
        default:
          bgColor = ''; // Use an empty string for the default
      }

      return (
        <div
          style={{
            backgroundColor: bgColor,
            color: '#FFF',
            width: '100%',
            textAlign: 'center',
            lineHeight: '30px', 
            borderRadius: '4px', 
          }}
        >
          {params.row.status}
        </div>
      );
    },
  },
];

// Sample data for the grid
const rows: Device[] = [
  { id: "1", name: 'Device 1', location: { latitude: 34.0522, longitude: -118.2437 }, status: "Seen" },
  { id: "2", name: 'Device 2', location: { latitude: 34.0525, longitude: -118.2413 }, status: "Seen" },
  { id: "3", name: 'Device 3', location: { latitude: -1, longitude: -1 }, status: "Missing" },
  { id: "4", name: 'Device 4', location: { latitude: -1, longitude: -1 }, status:"Repair" },

  // ...other devices
];

const DeviceGrid: React.FC = () => {
  return (
    <Box m="20px">
    <div className="gridTitleContainer">
      <Header title="Devices" subtitle="Devices list" />
    </div>
    <div className="dataGridContainer">
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.id}
      />
    </div>
</Box>
  );
};

export default DeviceGrid;
