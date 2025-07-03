import { Link } from "react-router";
import "./Layout.css";
import NavBar from "./NavBar";




export default function Layout({ children }) {
  return (
    <div className="layout">
      <NavBar />
      <main className="main-content">{children}</main>
      <footer className="footer">
        <p>&copy; 2023 Cupcake Heaven</p>
      </footer>
    </div>
  );
}
