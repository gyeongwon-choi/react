import useCounterStore from "../../store/counter";

export default function Counter() {
  const { count, increase, decrease } = useCounterStore();

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Counter (Zustand)</h2>
      <p>Count: {count}</p>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}