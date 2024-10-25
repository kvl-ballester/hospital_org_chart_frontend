import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home"
import NavBar from "./components/NavBar";
import Department from "./pages/Department/Department";
import DepartmentDetail from "./pages/Department/DepartmentDetail";
import DepartmentNew from "./pages/Department/DepartmentNew";
import Employee from "./pages/Employee/Employee";
import EmployeeDetail from "./pages/Employee/EmployeeDetail";
import EmployeeEditNew from "./pages/Employee/EmployeeEditNew";

function App() {

  return <div>
    {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="department" element={<Department />} />
          <Route path="department/:id" element={<DepartmentDetail/>} />
          <Route path="department/new" element={<DepartmentNew/>} />

          <Route path="employee" element={<Employee />} />
          <Route path="employee/:id" element={<EmployeeDetail/>} />
          <Route path="employee/new" element={<EmployeeEditNew/>} />
          <Route path="employee/:id/edit" element={<EmployeeEditNew/>} />
        </Route>
      </Routes>
  </div>
}

function Layout() {
  return <div className="layout">
    <NavBar />
    {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
    <Outlet />
  </div>
}

export default App
