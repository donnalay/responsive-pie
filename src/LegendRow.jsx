import "./App.css";
import "./Legend.css";

export default function LegendRow({ category, count, percent }) {
  return (
    <div className="row">
      <p className="col category">{category}</p>
      <p className="col num">{count}</p>
      <p className="col num">{percent}%</p>
    </div>
  );
}
