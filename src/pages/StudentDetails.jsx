import { useParams, Link } from "react-router-dom";

import { getStudents } from "../api/api";
import useFetch from "../hooks/useFetch";

import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const StudentDetails = () => {
  const { id } = useParams();

  const {
    data,
    loading,
    error,
  } = useFetch(getStudents);

  const student = data.find(
    (item) => item.id.toString() === id
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!student) {
    return (
      <div className="message">
        <h2>Student Not Found</h2>

        <Link to="/students">
          Back to Students
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link
        to="/students"
        className="back-link"
      >
        ← Back to Students
      </Link>

      <div className="details-card">
        <img
          src={student.image}
          alt={student.firstName}
        />

        <h1>
          {student.firstName} {student.lastName}
        </h1>

        <p>
          <strong>Email:</strong>{" "}
          {student.email}
        </p>

        <p>
          <strong>Phone:</strong>{" "}
          {student.phone}
        </p>

        <p>
          <strong>Age:</strong>{" "}
          {student.age}
        </p>

        <p>
          <strong>Gender:</strong>{" "}
          {student.gender}
        </p>

        <p>
          <strong>University:</strong>{" "}
          {student.university}
        </p>
      </div>
    </div>
  );
};

export default StudentDetails;