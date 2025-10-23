const UsersPage  = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()

  return (
    <div>
      <h1>Usuarios (SSR)</h1>
      <ul>
        {users.map(u => <li key={u.id}>{u.name}</li>)}
      </ul>
    </div>
  )

}

export default UsersPage