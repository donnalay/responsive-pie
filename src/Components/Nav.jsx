import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <>
      <nav>
        <ul
          style={{
            backgroundColor: "#efefef",
            display: "flex",
            flexDirection: "row",
            listStyleType: "none",
            padding: "1rem",
            gap: "1rem",
          }}
        >
          <li>
            <Link to="/Report">Boards Example</Link>
          </li>
          <li>
            <Link to="/Example-1">Example: 3/12 Col, Height-1</Link>
          </li>
          <li>
            <Link to="/Example-2">Example: 3/12 Col, Height-2</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
