// app/user-list/page.tsx
async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

import UserFilter from './UserFilter';

export default async function UserList() {
  const users = await fetchUsers();

  return (
    <div>
      <h1>Usuarios</h1>
      <UserFilter users={users} />
    </div>
  );
}