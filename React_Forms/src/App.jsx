import ControlledForm from "./components/Controlled_Form";
import MultipleInputForm from "./components/MultipleInputForm";
import StudentForm from "./components/StudentForm";
import LoginForm from "./components/LoginForm";
import Employee from "./components/EmployeeLogin";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  return (
    <div>
      <ControlledForm />
      <MultipleInputForm />
      <StudentForm />
      <LoginForm />
      <Employee />
      <FeedbackForm />
    </div>
  );
}

export default App;