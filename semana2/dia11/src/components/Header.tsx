import { useTheme } from "@context/ThemeContext"


const Header = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <header
      style={{
        background: theme === 'light' ? '#eee' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '1rem'
      }}
    >
      <h1>Modo: {theme}</h1>
      <button onClick={toggleTheme}>
        Cambiar a {theme === 'light' ? 'dark' : 'light'}
      </button>
    </header>
  )
}

export default Header
