import { useContext } from "react";
import { EmployeesContext } from "../../context/EmployeesContext";

export const Information = ()=> {
  const { employees } = useContext(EmployeesContext);
  
  const employeesCount = employees.length;
  const employeesRaise = employees.filter(employees => employees.isRaising).length;

  return (
    <div className="info">
      <h1>Учет сотрудников в компании N</h1>
      <p>Общее количество сотрудников: {employeesCount}</p>
      <p>Премию получат: {employeesRaise}</p>
    </div>
  );
};
