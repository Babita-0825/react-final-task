import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Study Portal</h2>

      <div className="nav-links">
        <NavLink to="/" end>
          Dashboard
        </NavLink>

        <NavLink to="/students">
          Students
        </NavLink>

        <NavLink to="/departments">
          Departments
        </NavLink>

        <NavLink to="/add-student">
          Add Student
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;