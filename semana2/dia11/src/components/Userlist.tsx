import useFetch from "@hooks/useFetch";

type User = {
  id: number;
  name: string;
  email: string;
};


function UsersList() {
  const { data: users, loading, error } = useFetch<User[]>("/api/users");

  if (loading) return <p>Cargando usuarios...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users?.map((u) => (
        <li key={u.id}>{u.name} — {u.email}</li>
      ))}
    </ul>
  );
}

export default UsersList