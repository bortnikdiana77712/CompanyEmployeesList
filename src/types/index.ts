// Тип для сотрудника
export interface Employee {
  id: number;
  name: string;
  salary: number;
  isRaising: boolean;
}

// Тип для фильтра
export interface Filter {
  id: string;
  name: string;
}

// Тип для фильтра
export type FilterType = 'all' | 'raise' | 'salary';