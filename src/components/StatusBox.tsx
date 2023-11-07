import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';


const StyledStatusBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  margin: theme.spacing(1),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
}));

interface StatusBoxProps {
  title: string;
  count: number;
  icon: React.ReactElement; // Icon is a React element
}

const StatusBox: React.FC<StatusBoxProps> = ({ title, count, icon }) => {
  return (
    <StyledStatusBox>
      {icon} {/* Display the icon */}
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h6">{count}</Typography>
    </StyledStatusBox>
  );
};

export default StatusBox;
