import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "ненужная вещь" },
    { id: 1, value: 4, name: "ложка" },
    { id: 2, value: 0, name: "вилка" },
    { id: 3, value: 0, name: "тарелка" },
    { id: 4, value: 0, name: "набор минималиста" },
  ];
  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);

    setCounters(newCounters);
  };
  const handleReset = () => {
    setCounters(initialState);
  };
  const handleIncrement = (id) => {
    const indexObj = counters.findIndex((item) => item.id == id);
    const newArray = [...counters];
    newArray[indexObj].value += 1;
    setCounters(newArray);
  };
  const handleDecrement = (id) => {
    const indexObj = counters.findIndex((item) => item.id == id);
    const newArray = [...counters];
    newArray[indexObj].value -= 1;
    setCounters(newArray);
  };
  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          {...count}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <button className="btn btn-primary m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};
export default CountersList;
