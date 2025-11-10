// Интерфейс для пропсов компонента
interface InformationProps {
  employeesCount: number;
  employeesRaise: number;
}

export const Description = ({employeesCount, employeesRaise }: InformationProps) => {
  return (
    <div className="info">
        <h1>Учет сотрудников в компании N</h1>
        <p>Общее количество сотрудников: {employeesCount}</p>
        <p>Премию получат: {employeesRaise }</p>
    </div>
  )
}
