import "./App.css";
import Card from "./Card";
import ChartElements from "./ChartElements";

function App() {
  return (
        <div class="container">
        <div class="nav-bar"></div>
        <div class="section">
            <div class="heading">
                <h1>Page Title</h1>
                <p>Board Description</p>
                <p>Donna L last edited Feb 23, 2025</p>
            </div>
            <div class="dashboard">
              <div className="flex-row"><Card element={<ChartElements/>} columns={
      "col-3"} height={"height-2"}/>
                  <Card element={<ChartElements/>} columns={
      "col-3"} height={"height-3"}/>
            <Card element={<ChartElements/>} columns={
      "col-3"}height={"height-1"}/></div>
            
            <Card element={<ChartElements/>} columns={
      "col-4"}height={"height-1"}/>
            <Card element={<ChartElements/>} columns={
      "col-5"}height={"height-1"}/>
            <Card element={<ChartElements/>} columns={
      "col-6"}height={"height-1"}/>
            <Card element={<ChartElements/>} columns={
      "col-7"}height={"height-1"}/>
            <Card element={<ChartElements/>} columns={
      "col-8"}height={"height-1"}/>
            <Card element={<ChartElements/>} columns={
      "col-9"}height={"height-1"}/>
            <Card element={<ChartElements/>} columns={
      "col-10"}height={"height-1"}/>
            <Card element={<ChartElements/>} columns={
      "col-11"}height={"height-1"}/>
            <Card element={<ChartElements/>} columns={
      "col-12"}height={"height-1"}/>
            </div>

      </div>
      </div>

  );
}

export default App;
