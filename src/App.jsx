import { Route, Routes } from "react-router-dom";
import Default from "./Pages/Default";
import Report from "./Pages/Report";
import Nav from "./Components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/report" element={<Report />} />
        <Route path="/default" element={<Default />} />
      </Routes>
    </>
  );
}

export default App;
