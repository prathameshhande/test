import { useEffect, useState } from "react";

import "./App.css";
import CreateTimer from "./components/addTimer/AddTimer";
import Timer from "./components/time/Time";
import moment from "moment";

function App() {
  const [data, setData] = useState([]);

  const createTimer = (newData) => {
    setData([
      ...data,
      {
        id: Date.now(),
        seconds: newData,
        created: moment().format("DD/MM/YYYY hh:m:ss"),
      },
    ]);
  };

  const removeTimer = (id) => {
    setData(data?.filter((item) => item?.id !== id));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((d) => {
          if (d.seconds <= 0) {
            removeTimer(d.id);
          }
          return { ...d, seconds: d.seconds - 0.01 };
        })
      );
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex">
        <div className="timerContainer">
          {data?.map((item, i) => (
            <Timer item={item} removeTimer={removeTimer} />
          ))}
        </div>
        <CreateTimer createTimer={createTimer} />
      </div>
    </>
  );
}

export default App;
