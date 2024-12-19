import React from 'react'
import { Box, Typography } from "@mui/material";
export default function E404Page() {
  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh"
  >
    <Typography variant="h4" color="error" fontWeight="bold">
      404 - Page Not Found
    </Typography>
  </Box>
  )
}
