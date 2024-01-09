// GPSDataGraph.tsx
import React, { useState, useEffect } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { Device } from "../Device";
import Header from "../Header";
import { Box } from "@mui/material";
import "./GpsDataGraphStyle.css";
import { Typography } from "@mui/material";

const GPSDataGraph: React.FC = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [selectedDevice, setSelectedDevice] = useState<string>("");
  const [selectedMetric, setSelectedMetric] = useState<
    "latitude" | "longitude"
  >("latitude");

  // Fetch GPS data (mocked here for example)
  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await fetch("http://findo.armata.info:3001/devices");
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

    fetchDevices();

    if (devices.length !== 0) {
      setSelectedDevice(devices[0].name);
    }
  }, []);

  const deviceOptions = Array.from(new Set(devices.map((item) => item.name)));

  // Event handler for device selection
  const handleDeviceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDevice(event.target.value);
  };

  // Event handler for metric selection
  const handleMetricChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMetric(event.target.value as "latitude" | "longitude");
  };

  const renderCustomizedScatterPoint = (props: any) => {
    const { cx, cy, payload } = props;

    let fillColor;
    switch (payload.status) {
      case "Seen":
        fillColor = "green";
        break;
      case "Repair":
        fillColor = "orange";
        break;
      case "Missing":
        fillColor = "red";
        break;
      default:
        fillColor = "#8884d8"; // default color
    }

    return <circle cx={cx} cy={cy} r={4} fill={fillColor} />;
  };

  const scatterData = devices
    .filter((item) => item.name === selectedDevice)
    .map((item) => ({
      value: item.location[selectedMetric],
      status: item.status,
      name: item.name,
      timestamp: item.timestamp,
    }));

    let yAxisDomain;
    if(scatterData[0] != null) {
    if(scatterData[0].status !== 'Seen') {
      yAxisDomain = [0,-1];
    }
    else if (selectedMetric === 'latitude') {
        yAxisDomain = [51.15, 51.16]; 
    } else if (selectedMetric === 'longitude') {
      yAxisDomain = [4.97, 4.98]; // Adjust this for your longitude data
    }
  }
  return (
    <Box m="20px">
      <Header title="Graph" subtitle="Displays devices over time" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "75vh",
        }}
      >
        <div
          style={{
            width: "80%",
            background: "white",
            padding: "20px",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <Typography variant="body1">Device name:</Typography>
            <select
              value={selectedDevice}
              onChange={handleDeviceChange}
              className="select-box"
              style={{ width: "200px", marginLeft: 50 }}
            >
              <option value="">Select a Device</option>
              {deviceOptions.map((deviceName) => (
                <option key={deviceName} value={deviceName}>
                  {deviceName}
                </option>
              ))}
            </select>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <Typography variant="body1">Latitude/Longitude:</Typography>
            <select
              value={selectedMetric}
              onChange={handleMetricChange}
              className="select-box"
              style={{ width: "200px", marginLeft: 10 }}
            >
              <option value="latitude">Latitude</option>
              <option value="longitude">Longitude</option>
            </select>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid />
              <XAxis type="number" dataKey="timestamp" name="Timestamp" />
              <YAxis
                type="number"
                dataKey="value"
                name={selectedMetric}
                domain={yAxisDomain}
                unit="°"
              />
              <Tooltip />
              <Legend />
              <Scatter
                name={selectedMetric}
                data={scatterData}
                fill="#8884d8"
                shape={renderCustomizedScatterPoint}
              />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Box>
  );
};

export default GPSDataGraph;
