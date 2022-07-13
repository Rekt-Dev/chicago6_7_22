import "./styles.css";
import "./index.css";
import Header from "./components/Header";
import { Link } from "react-router-dom";
import { Card } from "./components/Card";
import { json } from "./services/json";
import "bootstrap/dist/css/bootstrap.min.css";
import { getData, data } from "./services/getData";
import { Main } from "./components/Main";
export default function App() {
  getData();
  return (
    <div>
      <Header />
      <Main />
      <div>
        <Link to="/2_10">pages : 2-10 | </Link>
        <Link to="/11_20">pages : 11-20 | </Link>
        <Link to="/21_30">pages : 21-30 | </Link>
        <Link to="/31_40">pages : 31-40 | </Link>
      </div>
    </div>
  );
}
