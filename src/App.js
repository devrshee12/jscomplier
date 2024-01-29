import logo from "./logo.svg";
import "./App.css";
import Editor from "./components/Editor";
import { useEffect, useState } from "react";

function App() {
  const [js, setJs] = useState("// write your js code here");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const handleRunCode = () => {
    setOutput("");
    setError("");
    try {
      const consoleLog = console.log;
      console.log = (message) =>
        setOutput((prevOutput) =>
          prevOutput ? `${prevOutput}\n${typeof message === typeof "" ? message : JSON.stringify(message)}` : (typeof message === typeof "" ? message : JSON.stringify(message))
        );
      eval(js);

      console.log = consoleLog;
    } catch (err) {
      setError(`Error: ${err.message}`);
    }
  };


  return (
    <div className="container">
      <div className="first">
        <Editor language="javascript" value={js} onChange={setJs} />
      </div>
      <div className="second">
        <div className="output">
          {output && <p class="text-success fw-bold display-6">{output}</p>}
          {error && <p class="text-danger fw-bold display-6">{error}</p>}
        </div>

        <div className="btn-container">
          <button
            type="button"
            class="btn btn-outline-success"
            onClick={handleRunCode}
          >
            Run Code
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
