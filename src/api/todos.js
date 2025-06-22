export const fetchTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
  if (!response.ok) {
    throw new Error('Failed to fetch todos');
  }
  const data = await response.json();
  return data;
};