import {
  useId,
  useRef,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import { useStudents } from "../context/StudentContext";

const AddStudent = () => {
  const navigate = useNavigate();

  const { dispatch } = useStudents();

  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();

  const nameRef = useRef();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [error, setError] =
    useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name) {
      setError("Name is required.");
      nameRef.current.focus();
      return;
    }

    if (!email) {
      setError("Email is required.");
      return;
    }

    if (!email.includes("@")) {
      setError("Enter a valid email.");
      return;
    }

    if (!phone) {
      setError("Phone number is required.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError(
        "Phone number must contain 10 digits."
      );
      return;
    }

    const newStudent = {
      id: Date.now(),
      firstName: name,
      lastName: "",
      email: email,
      phone: phone,
      age: 20,
      gender: "Not specified",
      university: "StudyHub University",
      image:
        "https://i.pravatar.cc/150?img=12",
    };

    dispatch({
      type: "ADD_STUDENT",
      payload: newStudent,
    });

    alert("Student added successfully!");

    navigate("/students");
  };

  return (
    <div>
      <h1>Add Student</h1>

      <p className="description">
        Add a new student.
      </p>

      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor={nameId}>
              Name
            </label>

            <input
              id={nameId}
              ref={nameRef}
              type="text"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              placeholder="Enter name"
            />
          </div>

          <div className="form-group">
            <label htmlFor={emailId}>
              Email
            </label>

            <input
              id={emailId}
              type="text"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label htmlFor={phoneId}>
              Phone
            </label>

            <input
              id={phoneId}
              type="text"
              value={phone}
              onChange={(event) =>
                setPhone(event.target.value)
              }
              placeholder="Enter 10 digit phone"
            />
          </div>

          {error && (
            <p className="form-error">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="primary-button"
          >
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;