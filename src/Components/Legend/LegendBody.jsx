import "./Legend.css";
import "../../App.css";

import LegendRow from "./LegendRow";
import { v4 as uuidv4 } from "uuid";

export default function LegendBody() {
  const data = [
    {
      id: uuidv4(),
      category: "Category Name",
      count: 1000000,
      percent: 99.99,
    },
    {
      id: uuidv4(),
      category: "Category Name",
      count: 1000000,
      percent: 99.99,
    },
    {
      id: uuidv4(),
      category: "Category Name",
      count: 1000000,
      percent: 99.99,
    },
    {
      id: uuidv4(),
      category: "Category Name",
      count: 1000000,
      percent: 99.99,
    },
    {
      id: uuidv4(),
      category: "Category Name",
      count: 1000000,
      percent: 99.99,
    },
    {
      id: uuidv4(),
      category: "Category Name",
      count: 1000000,
      percent: 99.99,
    },
    {
      id: uuidv4(),
      category: "Category Name",
      count: 1000000,
      percent: 99.99,
    },
    {
      id: uuidv4(),
      category: "Category Name",
      count: 1000000,
      percent: 99.99,
    },
    {
      id: uuidv4(),
      category: "Category Name",
      count: 1000000,
      percent: 99.99,
    },
    {
      id: uuidv4(),
      category: "Category Name",
      count: 1000000,
      percent: 99.99,
    },
    {
      id: uuidv4(),
      category: "Category Name",
      count: 1000000,
      percent: 99.99,
    },
    {
      id: uuidv4(),
      category: "Category Name",
      count: 1000000,
      percent: 99.99,
    },
    {
      id: uuidv4(),
      category: "Category Name",
      count: 1000000,
      percent: 99.99,
    },
    {
      id: uuidv4(),
      category: "Category Name",
      count: 1000000,
      percent: 99.99,
    },
  ];
  console.log(data);
  return (
    <div className="body">
      {data.map((d) => {
        return (
          <LegendRow
            key={d.id}
            category={d.category}
            count={d.count}
            percent={d.percent}
          />
        );
      })}
    </div>
  );
}
