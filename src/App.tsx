import { AddingEmployees } from "./components/AddEmployer";
import { Information } from "./components/Information";
import { EmployeesList } from "./components/EmployeesList";
import { FilterEmployees } from "./components/Filter";
import "./index.css";

function App() {
  const isError = false;

  if (isError) {
    throw new Error("Something went wrong");
  }

  return (
    <section>
      <Information />
      <FilterEmployees />
      <EmployeesList />
      <AddingEmployees />
    </section>
  );
}

export default App;
