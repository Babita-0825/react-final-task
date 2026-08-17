import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { getStudents } from "../api/api";
import useFetch from "../hooks/useFetch";

import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import StudentCard from "../components/StudentCard";

import { useStudents } from "../context/StudentContext";

const Students = () => {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const search =
    searchParams.get("search") || "";

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

  const handleSearch = (event) => {
    const value = event.target.value;

    if (value) {
      setSearchParams({
        search: value,
      });
    } else {
      setSearchParams({});
    }
  };

  const filteredStudents =
    students.filter((student) => {
      const fullName =
        student.firstName +
        " " +
        student.lastName;

      return fullName
        .toLowerCase()
        .includes(search.toLowerCase());
    });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div>
      <h1>Students</h1>

      <p className="description">
        Search for a student by name.
      </p>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search student..."
          value={search}
          onChange={handleSearch}
        />
      </div>

      <p className="result">
        Students found: {filteredStudents.length}
      </p>

      <div className="student-grid">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
            />
          ))
        ) : (
          <div className="message">
            <p>No students found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Students;