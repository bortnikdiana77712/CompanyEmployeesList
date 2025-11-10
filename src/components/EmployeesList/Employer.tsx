import cookie from "../../assets/cookie.png";
import deleteImg from "../../assets/delete.png";
import { ActionButton } from "./ActionButton";
import { Employee } from "../../types";

// Расширяем интерфейс Employee, добавляя обработчики событий
interface EmployerProps extends Employee {
  onDelete: (id: number) => void;
  onToggleRaise: (id: number) => void;
}

export const Employer = ({ id, name, salary, isRaising, onDelete, onToggleRaise }: EmployerProps) => {

  return (
    <li className="employee">
      <p className="name">{name}</p>
      <p className="salary">{salary} $</p>
      <div className="employees-button">
        <ActionButton
          image={cookie}
          alt="cookie"
          isRaising={isRaising}
          onClick={() => onToggleRaise(id)}
        />
        <ActionButton
          image={deleteImg}
          alt="delete"
          onClick={() => onDelete(id)}
        />
      </div>
    </li>
  );
};
