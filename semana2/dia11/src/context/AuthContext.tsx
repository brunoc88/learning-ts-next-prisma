import { createContext, useContext, useState } from "react"

type User = string | null

interface AuthContextType { // <-- seria como un contrato
    user: User;
    login: (nombre: string) => void;
    logout: () => void;
}

// Recomendación segura: inicializarlo undefined y forzar comprobación en un useAuth hook, así no escondés errores
const AuthContext = createContext<AuthContextType | null>(null)
// ¿Por qué? porque evita hacer createContext({} as AuthContextType) que "silencia" TypeScript y puede ocultar errores en tiempo de ejecución.

// children representa todo lo que envolvés dentro del provider.
// Eso significa que va a renderizar los hijos que envuelvas, y esos hijos heredan el contexto.
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User>(null)//<-- tiene que ser string '' o null

    const login = (nombre: string) => setUser(nombre);
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth debe usarse dentro de AuthProvider");
  return ctx;
};