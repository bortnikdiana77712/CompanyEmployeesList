'use server'

import { Employee } from '../../types'

export async function sendForm(formData: FormData): Promise<Employee> {
  // Приводим типы данных из FormData
  const name = formData.get('name') as string;
  const salary = formData.get('salary') as string;

  if (!name) {
    throw new Error('Параметр "name" обязателен');
  }

  if (!salary) {
    throw new Error('Параметр "salary" обязателен');
  }

  // Типизируем создаваемый объект
  const newEmployee: Employee = {
      id: Math.random(),
      name,
      salary: parseInt(salary),
      isRaising: false,
  }
  return newEmployee
}