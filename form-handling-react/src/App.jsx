import RegistrationForm from "./components/RegistrationForm";
import formikForm from "./components/formikForm";

function App() {
  return (
    <div>
      <h1>User Registration</h1>
      <h2>Controlled Form</h2>
      <RegistrationForm />

      <h2>Formik Form</h2>
      <formikForm />
    </div>
  );
}

export default App;
