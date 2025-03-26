import "../Components/Legend/Legend.css";
import "../App.css";
import Card from "../Components/Card";
import ChartElements from "../Components/ChartElements";

export default function ExampleOne() {
  return (
    <div style={{ margin: "1rem" }}>
      <div style={{ margin: "1rem 0" }}>
        <h2>Width: 3/12 Columns (Default), Height: 280px (Default)</h2>
      </div>

      <Card element={<ChartElements />} columns={"col-3"} height={"height-1"} />
      
      <div style={{ display: "flex", gap: "20px" }}>
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h2>Legend Behaviour</h2>
          <ul style={{ paddingLeft: "20px" }}>
            <li>
              Resizes based on available width using CSS container queries.
            </li>
            <li>
              <strong>General Behavior:</strong>
              <ul>
                <li>
                  Legend has a flexible width, with a minimum width of 116px and
                  a maximum width of 600px.
                </li>
              </ul>
            </li>
            <li>
              <strong>When the container width is ≤ 250px:</strong>
              <ul>
                <li>
                  The last numeric column (<code>.num:last-of-type</code>) in
                  both the header and body is hidden.
                </li>
                <li>
                  The <code>.category</code> column maintains a fixed width
                  (60%).
                </li>
                <li>
                  The legend's height shrinks (body height reduced from 132px to
                  88px).
                </li>
                <li>
                  The <code>.wrapper</code> expands to 100% width.
                </li>
              </ul>
            </li>
            <li>
              <strong>When the container width is ≤ 180px:</strong>
              <ul>
                <li>
                  All numeric columns (<code>.num</code>) are hidden.
                </li>
                <li>
                  The <code>.category</code> column becomes flexible.
                </li>
                <li>
                  The <code>.col</code> elements lose right margin.
                </li>
              </ul>
            </li>
            <li>
              <strong>Summary:</strong>
              <ul>
                <li>
                  At full width (above 250px): The legend displays all elements
                  normally.
                </li>
                <li>At ≤ 250px: One numeric column disappears.</li>
                <li>
                  At ≤ 180px: All numeric columns disappear, and the category
                  adjusts.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div
          style={{
            flex: 1,
            minWidth: "300px",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h2>Card Responsive Behaviour</h2>
          <ul style={{ paddingLeft: "20px" }}>
            <li>
              The card element resizes based on media and container queries.
            </li>
            <li>
              <strong>General Behavior:</strong>
              <ul>
                <li>
                  The <code>.card</code> is flexible (<code>flex: 1</code>).
                </li>
                <li>
                  Minimum height: 280px; supports <code>.height-1</code> to{" "}
                  <code>.height-5</code>.
                </li>
                <li>Adjusts column widths dynamically.</li>
              </ul>
            </li>
            <li>
              <strong>Responsive Adjustments (Media Queries):</strong>
              <ul>
                <li>
                  <strong>When screen width is ≤ 724px:</strong>
                  <ul>
                    <li>Columns expand to full width.</li>
                    <li>Layout switches to column format.</li>
                    <li>Text size increases to 1rem.</li>
                  </ul>
                </li>
                <li>
                  <strong>
                    When screen width is between 727px and 1400px:
                  </strong>
                  <ul>
                    <li>Text size decreases to 0.75rem.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <strong>Responsive Adjustments (Container Queries):</strong>
              <ul>
                <li>
                  <strong>
                    When <code>.card</code> height is ≥ 280px:
                  </strong>
                  <ul>
                    <li>
                      <code>.chart-elements</code> switches to column layout.
                    </li>
                    <li>
                      <code>.Pie</code> element expands.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>
                    When <code>.card</code> width is ≤ 250px and height is ≤
                    250px:
                  </strong>
                  <ul>
                    <li>
                      <code>Legend</code> is hidden.
                    </li>
                    <li>
                      <code>Pie</code> remains visible and resizes.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <strong>Summary:</strong>
              <ul>
                <li>At larger widths: Row layout, compact text.</li>
                <li>
                  At smaller widths: Elements resize to fit available space.
                </li>
                <li>At very small sizes: Legend is hidden entirely.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
