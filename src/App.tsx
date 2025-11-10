import { useState } from "react";
import { employeesList} from "../mocks";
import { AddingEmployees } from "./components/AddEmployer";
import { Description } from './components/Description'
import { EmployeesList } from "./components/EmployeesList";
import { FilterEmployees } from "./components/Filter";
import { Employee, FilterType } from "./types";
import "./index.css";

const filters = [
  { id: "all", name: "Все сотрудники" },
  { id: "raise", name: "На повышение" },
  { id: "salary", name: "З/П больше 1000$" }
];

function App() {
  
  const [employees, setEmployees] = useState<Employee[]>(employeesList);
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchValue, setSearchValue] = useState('');

  const filteredEmployees = employees.filter((employees) => {
    if (filter === "raise") return employees.isRaising;
    if (filter === "salary") return employees.salary > 1000;
    return true;
  });

  const getFilteredEmployees = (employees:Employee[], searchText:string) => {
    if (searchText.length === 0) return employees;
    return employees.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()));
  }

  const filterProps = {
    filters,
    filter,
    setFilter,
    searchValue,
    setSearchValue
  }

  const totalCount = employees.length;
  const raiseCount = employees.filter(employees => employees.isRaising).length;

  const employeesActual = getFilteredEmployees(filteredEmployees, searchValue);

  return (
    <section>
      <Description employeesCount={totalCount} employeesRaise={raiseCount}/>
      <FilterEmployees {...filterProps}/>
      <EmployeesList employees={employeesActual} setEmployees={setEmployees}/>
      <AddingEmployees setEmployees={setEmployees}/>
    </section>
  );
}

export default App;
