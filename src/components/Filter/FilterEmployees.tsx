import { useContext } from 'react'
import { FilterType } from '../../types'
import { EmployeesContext } from '../../context/EmployeesContext'

const filters = [
  { id: "all", name: "Все сотрудники" },
  { id: "raise", name: "На повышение" },
  { id: "salary", name: "З/П больше 1000$" }
];

export const FilterEmployees = () => {
  const { filter, setFilter, searchValue, setSearchValue } = useContext(EmployeesContext)
  
  return (
    <div className="search">
        <input 
          type="text" 
          placeholder='Найти сотрудника'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}/>
        <div className="buttons">
            {filters.map(({ id, name }) => (
              <button
                key={id} 
                className={filter === id ? "active-filter" : ""}
                onClick={() => setFilter(id as FilterType)} //Приводим тип id к FilterType при клике
              >
                {name}
              </button>
            ))}
        </div>
    </div>
  )
}
