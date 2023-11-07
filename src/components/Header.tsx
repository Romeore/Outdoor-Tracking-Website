import { Typography, Box, useTheme } from "@mui/material";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  const theme = useTheme();

  return (
    <Box sx={{ textAlign: 'center', marginBottom: 4 }}> 
      <Typography
        variant="h2"
        color={theme.palette.grey[100]} 
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        color={theme.palette.grey[400]} 
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
