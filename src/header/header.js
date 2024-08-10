import "../App.css";
import "../Bootstrap.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div class="header">
      <header class="shadow-bottom bg-white main-header">
        <nav class="navbar navbar-expand-md navbar-light">
          <div class="container">
            <NavLink className="navbar-brand px-2">
              Code Document & Practices
            </NavLink>
            <button
              class="navbar-toggler border-0"
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
              aria-controls="navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse text-center" id="navigation">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <NavLink className="nav-link text-dark" to="/">
                    <b>Home</b>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
