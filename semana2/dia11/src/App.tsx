import Example from "@components/Example"
import Navbar from "@components/Navbar"
//import UsersList from "@components/Userlist"
import Header from "@components/Header"
import ThemeProvider from "@context/ThemeContext"

const App = () => {
    return (
        <>
            <ThemeProvider>
                <Navbar />
                <Header />
                <Example />
            </ThemeProvider>
        </>
    )
}
export default App