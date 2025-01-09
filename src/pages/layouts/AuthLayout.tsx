import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return <Box sx={{ height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Outlet/>
  </Box>
}

export default AuthLayout;