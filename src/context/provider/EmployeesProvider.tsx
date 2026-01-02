import { useState } from "react";
import { Employee, FilterType } from "../../types";
import { employeesList } from "../../../mocks";
import { EmployeesContext } from "../EmployeesContext";

export const EmployeesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [employees, setEmployees] = useState<Employee[]>(employeesList);
  const [filter, setFilter] = useState<FilterType>("all");
  const [searchValue, setSearchValue] = useState("");

  const value = {
    employees,
    setEmployees,
    filter,
    setFilter,
    searchValue,
    setSearchValue,
  };

  return (
    <EmployeesContext.Provider value={value}>
      {children}
    </EmployeesContext.Provider>
  );
};
