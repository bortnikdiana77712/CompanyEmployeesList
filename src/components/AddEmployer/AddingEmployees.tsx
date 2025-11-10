'use client'
import { sendForm } from './GetForm'
import { Employee } from '../../types'

// Типизируем пропсы с функцией обновления состояния
interface AddingEmployeesProps {
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>
}

export const AddingEmployees = ({ setEmployees }: AddingEmployeesProps) => {
  const handleAction = async (formData: FormData) => {
    try {
      const newEmployee = await sendForm(formData)
      setEmployees(prev => [newEmployee, ...prev])
    } catch (err) {
      console.error('Ошибка при добавлении сотрудника:', err)
    }
  }
  
  return (
    <div className="adding">
        <h2>Добавьте нового сотрудника</h2>
        <form action={handleAction}>
            <input name='name' type="text" placeholder='Как его зовут?'/>
            <input name='salary' type="number" placeholder='З/П в долларах?' required/>
            <button type="submit">Добавить</button>
        </form>
    </div>
  )
}
