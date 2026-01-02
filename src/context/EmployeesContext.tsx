import { createContext } from "react";
import { Employee, FilterType } from "../types";

export type EmployeesContextType = {
  employees: Employee[];
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

export const EmployeesContext = createContext({} as EmployeesContextType);
