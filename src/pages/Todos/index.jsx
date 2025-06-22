import { useQuery } from '@tanstack/react-query';
import { fetchTodos } from '../../api/todos';

export default function Todos() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading todos</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Todos (React Query)</h2>
      <ul>
        {data.map(todo => (
          <li key={todo.id}>{todo.title} {todo.completed ? '✅' : '❌'}</li>
        ))}
      </ul>
    </div>
  );
}
