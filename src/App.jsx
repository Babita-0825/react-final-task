import {
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import Departments from "./pages/Departments";
import DepartmentDetails from "./pages/DepartmentDetails";
import AddStudent from "./pages/AddStudent";

const App = () => {
  return (
    <>
      <Navbar />

      <main className="main-content">
        <Routes>

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/students"
            element={<Students />}
          />

          <Route
            path="/students/:id"
            element={<StudentDetails />}
          />

          <Route
            path="/departments"
            element={<Departments />}
          >
            <Route
              path=":departmentName"
              element={<DepartmentDetails />}
            />
          </Route>

          <Route
            path="/add-student"
            element={<AddStudent />}
          />

          <Route
            path="*"
            element={
              <div className="not-found">
                <h1>404</h1>
                <p>Page Not Found</p>
              </div>
            }
          />

        </Routes>
      </main>
    </>
  );
};

export default App;