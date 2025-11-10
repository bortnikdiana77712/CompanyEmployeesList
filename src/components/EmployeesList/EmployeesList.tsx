import { Employer } from "./Employer"
import { Employee } from "../../types"

// Типизируем пропсы, включая функцию setEmployees
interface EmployeesListProps {
  employees: Employee[] | undefined;
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
}

export const EmployeesList = ({employees, setEmployees}: EmployeesListProps) => {

  const handleDelete = (id: number) => {
    setEmployees(prev => prev.filter(employees => employees.id !== id));
  };

  const handleToggleRaise = (id: number) => {
    if (!employees) return;
    setEmployees(employees.map(emp =>
      emp.id === id ? { ...emp, isRaising: !emp.isRaising } : emp
    ));
  };

  return (
    <ul>
        {employees && employees.map((item) => (
          <Employer 
            key = {item.id} 
            {...item} 
            onDelete={handleDelete} 
            onToggleRaise={handleToggleRaise}
          />
        ))}       
    </ul>
  )
}