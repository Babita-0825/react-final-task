import { Link } from "react-router-dom";

const StudentCard = ({ student }) => {
  return (
    <div className="student-card">
      <img
        src={student.image}
        alt={student.firstName}
      />

      <h3>
        {student.firstName} {student.lastName}
      </h3>

      <p>{student.email}</p>

      <p>{student.phone}</p>

      <Link to={`/students/${student.id}`}>
        View Details
      </Link>
    </div>
  );
};

export default StudentCard;