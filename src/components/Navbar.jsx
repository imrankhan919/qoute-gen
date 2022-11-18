import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active text-light" aria-current="page" to={"/"}>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-light" aria-current="page" to={"/about"}>About</Link>
        </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
