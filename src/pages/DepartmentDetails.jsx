import {
  Link,
  useParams,
} from "react-router-dom";

const DepartmentDetails = () => {
  const { departmentName } =
    useParams();

  const departmentNames = {
    "computer-science": "Computer Science",
    electronics: "Electronics",
    mechanical: "Mechanical",
    civil: "Civil",
  };

  return (
    <div className="department-details">
      <Link to="/departments">
        ← Back to Departments
      </Link>

      <h2>
        {departmentNames[departmentName]}
      </h2>

      <p>
        Students of{" "}
        {departmentNames[departmentName]}{" "}
        department.
      </p>
    </div>
  );
};

export default DepartmentDetails;