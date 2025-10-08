import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, login, logout } = useAuth();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        background: "#222",
        color: "#fff",
      }}
    >
      <span>Mi App</span>

      {user ? (
        <div>
          <span style={{ marginRight: "1rem" }}>Hola {user}</span>
          <button onClick={logout}>Cerrar sesión</button>
        </div>
      ) : (
        <button onClick={() => login("Bruno")}>Iniciar sesión</button>
      )}
    </nav>
  );
};

export default Navbar;
