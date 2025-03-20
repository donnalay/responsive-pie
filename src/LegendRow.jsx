import "./App.css";
import "./Legend.css";

export default function LegendRow({ category, count, percent }) {
  return (
    <div className="row">
      <p className="col category">
      <svg class="legend-color"
                                                    viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect  width="32" height="32"
                                                        fill="#225DBE" />
                                                </svg>
        {category}</p>
      <p className="col num">{count}</p>
      <p className="col num">{percent}%</p>
    </div>
  );
}
