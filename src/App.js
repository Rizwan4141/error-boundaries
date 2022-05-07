import "./App.css";
import Demo1 from "./Components/Demo1";
import ErrorBond from "./Components/ErrorBond";

function App() {
  return (
    <div className="App">
      <h1>Error Boundary</h1>
      <ErrorBond>
        <Demo1 />
      </ErrorBond>
    </div>
  );
}

export default App;
