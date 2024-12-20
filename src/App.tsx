import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Home from "./pages/Home";
import Feed from "./pages/Feed";

function App() {
  return (
    <Routes>
      <Route path={routes.PUBLIC.HOME} element={<Home/>}/>
      <Route path={routes.PUBLIC.FEED} element={<Feed/>}/>
    </Routes>
  )
}

export default App;
