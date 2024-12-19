import React, { useContext } from 'react';
import { CircularProgress, Backdrop } from '@mui/material';
import GlobalContext from "../context/GlobalContext";

const Loader = () => {
  const { loader } = useContext(GlobalContext);

  if (!loader) return null;

  return (
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      }}
      open={loader}
    >
      <div style={{ position: 'relative', width: '64px', height: '64px' }}>
        <CircularProgress
          size={64}
          thickness={4}
          sx={{
            position: 'absolute',
            color: 'blue',
          }}
        />
        <CircularProgress
          size={64}
          thickness={4}
          sx={{
            position: 'absolute',
            color: 'yellow',
            animationDelay: '300ms',
          }}
        />
      </div>
    </Backdrop>
  );
};

export default Loader;