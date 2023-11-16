import { useTheme } from "@/app/providers/ThemeProvider/useTheme";
import logoImage from "@/shared/assets/logo.png";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "@/app/style/index.scss";

export const App = () => {
  const [count, setCount] = useState(0);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <p className={"primary"}>Primary</p>
      <p className={"secondary"}>Secondary</p>
      <p className={"success"}>Success</p>
      <p className={"error"}>Error</p>
      <p>{theme}</p>
      <button onClick={toggleTheme}>Switch</button>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/profile"}>Profile</Link>
      <img src={logoImage} />
      <Routes>
        <Route path={"/"} element={<h1>Home</h1>} />
        <Route path={"/about"} element={<h1>About</h1>} />
        <Route path={"/profile"} element={<h1>Profile</h1>} />
      </Routes>
    </div>
  );
};
