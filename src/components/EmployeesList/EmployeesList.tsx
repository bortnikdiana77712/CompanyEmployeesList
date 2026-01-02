import { Employer } from "./Employer";
import { useContext } from "react";
import { EmployeesContext } from "../../context/EmployeesContext";

export const EmployeesList = () => {
  const { employees, filter, searchValue, setEmployees } = useContext(EmployeesContext);

    const filteredEmployees = employees.filter((employees) => {
    if (filter === "raise") return employees.isRaising;
    if (filter === "salary") return employees.salary > 1000;
    return true;
  });

  const getFilteredEmployees = (employeesList: any[], searchValue: string) => {
    if (searchValue.length === 0) return employeesList;
    return employeesList.filter((item) => 
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  const employeesActual = getFilteredEmployees(filteredEmployees, searchValue);

  const handleDelete = (id: number) => {
    setEmployees((prev) => prev.filter((employee) => employee.id !== id));
  };

  const handleToggleRaise = (id: number) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === id ? { ...emp, isRaising: !emp.isRaising } : emp
      )
    );
  };

  return (
    <ul>
      {employeesActual &&
        employeesActual.map((item) => (
          <Employer
            key={item.id}
            {...item}
            onDelete={handleDelete}
            onToggleRaise={handleToggleRaise}
          />
        ))}
    </ul>
  );
};
