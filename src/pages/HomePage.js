import React, { useContext } from 'react';
import { Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import GlobalContext from "../context/GlobalContext";

const HomePage = () => {
  const { setLoader } = useContext(GlobalContext);

  const handleLoader = () => {
    setLoader(true);
    setTimeout(() => setLoader(false), 3000);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome to the HomePage
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        {/* Login Button */}
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/login"
          sx={{ textTransform: 'none' }}
        >
          Login
        </Button>

        {/* Register Button */}
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/register"
          sx={{ textTransform: 'none' }}
        >
          Register
        </Button>

        {/* Loader Button */}
        <Button
          variant="outlined"
          color="warning"
          onClick={handleLoader}
          sx={{ textTransform: 'none' }}
        >
          Show Loader
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
