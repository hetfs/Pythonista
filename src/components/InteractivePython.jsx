import React, { useEffect, useRef, useState } from "react";
import Editor from "@monaco-editor/react";

let pyodideInstance = null;

export default function InteractivePython({
  initialCode = `print("Hello, Python!")`,
}) {
  const editorRef = useRef(null);

  const [pyodide, setPyodide] = useState(null);
  const [loading, setLoading] = useState(true);
  const [output, setOutput] = useState("");

  useEffect(() => {
    async function init() {
      if (typeof window === "undefined") return;

      if (!window.loadPyodide) {
        const script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js";
        script.async = true;

        script.onload = async () => {
          pyodideInstance = await window.loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/",
          });

          setPyodide(pyodideInstance);
          setLoading(false);
        };

        document.body.appendChild(script);
      } else {
        if (!pyodideInstance) {
          pyodideInstance = await window.loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/",
          });
        }

        setPyodide(pyodideInstance);
        setLoading(false);
      }
    }

    init();
  }, []);

  const runCode = async () => {
    if (!pyodide) return;

    try {
      const code = editorRef.current.getValue();

      setOutput("");

      pyodide.setStdout({
        batched: (msg) => {
          setOutput((prev) => prev + msg + "\n");
        },
      });

      pyodide.setStderr({
        batched: (msg) => {
          setOutput((prev) => prev + msg + "\n");
        },
      });

      const result = await pyodide.runPythonAsync(code);

      if (result !== undefined) {
        setOutput((prev) => prev + String(result));
      }
    } catch (err) {
      setOutput(String(err));
    }
  };

  const resetEnvironment = () => {
    setOutput("");
    if (editorRef.current) {
      editorRef.current.setValue(initialCode);
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <Editor
        height="250px"
        defaultLanguage="python"
        defaultValue={initialCode}
        theme="vs-dark"
        onMount={(editor) => (editorRef.current = editor)}
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
        }}
      />

      <div style={{ marginTop: 10 }}>
        <button
          onClick={runCode}
          disabled={loading}
          style={{ marginRight: 10, padding: "6px 12px" }}
        >
          {loading ? "Loading Python..." : "Run Python"}
        </button>

        <button onClick={resetEnvironment} style={{ padding: "6px 12px" }}>
          Reset
        </button>
      </div>

      <pre
        style={{
          backgroundColor: "#1e1e1e",
          color: "#d4d4d4",
          padding: "10px",
          marginTop: "10px",
          minHeight: "60px",
          borderRadius: "6px",
        }}
      >
        {output || "Output will appear here"}
      </pre>
    </div>
  );
}
