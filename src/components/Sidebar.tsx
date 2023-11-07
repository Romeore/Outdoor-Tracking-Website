import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GridOnIcon from '@mui/icons-material/GridOn';
import { useNavigate } from 'react-router-dom';
import DevicesIcon from '@mui/icons-material/Devices';

const drawerWidth = 240;

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        {/* Dashboard/Home Menu Item */}
        <ListItem button onClick={() => navigate('/')}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        {/* Data Grid Menu Item */}
        <ListItem button onClick={() => navigate('/datagrid')}>
          <ListItemIcon>
            <DevicesIcon />
          </ListItemIcon>
          <ListItemText primary="Devices" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
