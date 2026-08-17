import { useEffect } from "react";

import { getStudents } from "../api/api";
import useFetch from "../hooks/useFetch";

import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import StudentCard from "../components/StudentCard";

import { useStudents } from "../context/StudentContext";

const Dashboard = () => {
  const { students, dispatch } = useStudents();

  const {
    data,
    loading,
    error,
  } = useFetch(getStudents);

  useEffect(() => {
    if (data.length > 0) {
      dispatch({
        type: "SET_STUDENTS",
        payload: data,
      });
    }
  }, [data, dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div>
      <h1>Student Management System</h1>

      <p className="description">
        Welcome to the student management system.
      </p>

      <div className="dashboard-box">
        <div>
          <h3>Total Students</h3>
          <h2>{students.length}</h2>
        </div>

        <div>
          <h3>Total Departments</h3>
          <h2>4</h2>
        </div>
      </div>

      <h2 className="section-title">
        Recent Students
      </h2>

      <div className="student-grid">
        {students.slice(0, 4).map((student) => (
          <StudentCard
            key={student.id}
            student={student}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;