import { useEffect, useState } from "react";
import "./App.css";


function App() {
  const [darkMode, setdarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      // document.documentElement.classList.add("dark");
      document.documentElement.dataset.theme = "dark";
    } else {
      document.documentElement.dataset.theme = "";
    }
  }, [darkMode]);

  return (
    <>
      {/* <h1 className="text-xl font-bold text-red-500">Tailwindcss setup</h1> */}
      <button
        className="bg-bkg text-content "
        onClick={() => {
          setdarkMode((v) => !v);
        }}
      >
        change theme {darkMode ? "dark" : "white"}
      </button>
    </>
  );
}

export default App;
