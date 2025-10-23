// app/user-list/UserFilter.tsx
'use client';
import { useState } from 'react';

export default function UserFilter({ users }: { users: { id: number; name: string }[] }) {
  const [query, setQuery] = useState('');
  const filtered = users.filter(u => u.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <input type="text" placeholder="Buscar" value={query} onChange={e => setQuery(e.target.value)} />
      <ul>
        {filtered.map(u => <li key={u.id}>{u.name}</li>)}
      </ul>
    </div>
  );
}