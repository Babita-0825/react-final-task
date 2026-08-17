import {
  Link,
  Outlet,
} from "react-router-dom";

const Departments = () => {
  const departments = [
    {
      id: "computer-science",
      name: "Computer Science",
    },
    {
      id: "electronics",
      name: "Electronics",
    },
    {
      id: "mechanical",
      name: "Mechanical",
    },
    {
      id: "civil",
      name: "Civil",
    },
  ];

  return (
    <div>
      <h1>Departments</h1>

      <p className="description">
        Select a department.
      </p>

      <div className="department-grid">
        {departments.map((department) => (
          <Link
            key={department.id}
            to={department.id}
            className="department-card"
          >
            <h2>{department.name}</h2>

            <p>
              View Department →
            </p>
          </Link>
        ))}
      </div>

      <Outlet />
    </div>
  );
};

export default Departments;