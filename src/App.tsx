import "./styles.css";
import "./index.css";
import Header from "./components/Header";
import { Link } from "react-router-dom";
import { Card } from "./components/Card";
import { json } from "./services/json";
import "bootstrap/dist/css/bootstrap.min.css";
import { getData, data } from "./services/getData";
import { Main } from "./components/Main";
import { Pagination } from "./components/Pagination";

export default function App() {
  getData();
  return (
    <div>
      <Header />
      <Main />
      <Pagination />

      <Pagination />
    </div>
  );
}
