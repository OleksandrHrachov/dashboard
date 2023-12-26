import "./App.scss";
import { CustomersPage } from "./components/CustomersPage";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <div className="app">
      <Navigation />
      <CustomersPage />
    </div>
  );
}

export default App;
