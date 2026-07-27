import { useState } from "react";

export default function Section() {
  const username = "Menna";

  const [counter, setCounter] = useState(0);

  const [fruits] = useState(["Apple", "Orange", "Mango"]);

  const [userData] = useState({
    name: "Menna",
    age: 20,
  });

  return (
    <section className="container py-5">
      <h2>React Concepts</h2>
      <p>Practicing useState and rendering data.</p>

      <hr />

      <h4>Counter</h4>

      <button
        className="btn btn-primary mb-2"
        onClick={() => setCounter(counter + 1)}
      >
        Increase
      </button>

      <p>Count: {counter}</p>

      <hr />

      <h4>Fruits</h4>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <hr />

      <h4>User Data</h4>

      <p>Name: {userData.name}</p>
      <p>Age: {userData.age}</p>
      <p>Welcome, {username}</p>
    </section>
  );
}
