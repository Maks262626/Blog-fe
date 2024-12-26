import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import SideBar from "./components/Drawer";
import { Box } from "@mui/material";
import { sidebarWidth } from "./constants";
import FullArticle from "./pages/FullArticle";

function App() {
  return (
    <Box height={'100%'} position={'relative'}>
      <SideBar />
      <Box sx={{height: '100dvh',pl:{xs: 0,md: `${sidebarWidth}px`},pt:8}}>
        <Routes>
          <Route path={routes.PUBLIC.HOME} element={<Home />} />
          <Route path={routes.PUBLIC.FEED} element={<Feed />} />
          <Route path="/article/:id" element={<FullArticle />} />
        </Routes>
      </Box>
    </Box>
  )
}

export default App;
