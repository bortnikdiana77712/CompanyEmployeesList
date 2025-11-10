import type { Dispatch, SetStateAction } from 'react';
import { FilterType } from '../../types';

interface Filter {
  id: string;
  name: string;
}

//Интерфейс пропсов с типизацией фильтра и функции setFilter
interface FilterEmployeesProps {
  filters: Filter[];
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
  searchValue : string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

export const FilterEmployees = ({filters, setFilter, filter, searchValue, setSearchValue}: FilterEmployeesProps) => {
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
