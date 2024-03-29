import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage, HomePage, LoginPage, Navbar, } from './';
import { UserProvider } from './context';


export const MainApp = () => {
  return (
    <UserProvider>
      {/* <h1>MainApp</h1> */ }
      <Navbar />
      <hr />

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="about" element={ <AboutPage /> } />
        <Route path="login" element={ <LoginPage /> } />

        {/* redireccion */ }
        {/* <Route path="/*" element={ <LoginPage /> } /> */ }
        <Route path="/*" element={ <Navigate to="/about" /> } />

      </Routes>
    </UserProvider>
  )
}