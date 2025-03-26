import { Route, Routes } from "react-router-dom";
import ExampleOne from "./Pages/ExampleOne";
import ExampleTwo from "./Pages/ExampleTwo";
import Report from "./Pages/Report";
import Nav from "./Components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/responsive-pie" element={<Report />} />
        <Route path="/report" element={<Report />} />
        <Route path="/example-1" element={<ExampleOne />} />
        <Route path="/example-2" element={<ExampleTwo />} />
      </Routes>
    </>
  );
}

export default App;
