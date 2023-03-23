import { Link, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components/navigation/navigation-bar.component";
import { AuthPage } from "./pages/auth/auth.page";
import { HomePage } from "./pages/home/home.page";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
