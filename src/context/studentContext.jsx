import {
  createContext,
  useContext,
  useReducer,
} from "react";

import studentReducer from "../reducer/studentReducer";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, dispatch] = useReducer(
    studentReducer,
    []
  );

  return (
    <StudentContext.Provider
      value={{
        students,
        dispatch,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudents = () => {
  return useContext(StudentContext);
};