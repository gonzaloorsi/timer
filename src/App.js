import React from "react";
import "./App.css";
import { format } from "date-fns";

function App() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{format(time, "yyyy-MM-dd HH:mm:ss")}</p>
      </header>
    </div>
  );
}

export default App;
