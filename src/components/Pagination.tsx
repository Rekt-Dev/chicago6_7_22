import { Link } from "react-router-dom";

export function Pagination() {
  return (
    <div>
      <Link to="/2_10">pages : 2-10 | </Link>
      <Link to="/11_20">pages : 11-20 | </Link>
      <Link to="/21_30">pages : 21-30 | </Link>
      <Link to="/31_40">pages : 31-40 | </Link>
    </div>
  );
}
