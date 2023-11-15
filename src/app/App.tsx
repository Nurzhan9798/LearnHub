import cls from '@/app/App.module.scss'
import {useState} from "react";
import {Link, Route, Routes} from "react-router-dom";

export const App = () => {
    const [count, setCount] = useState(0)

    return (
        <div className={cls.container}>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/profile"}>Profile</Link>
            <Routes>
                <Route path={"/"} element={<h1>Home</h1>}/>
                <Route path={"/about"} element={<h1>About</h1>}/>
                <Route path={"/profile"} element={<h1>Profile</h1>}/>
            </Routes>
        </div>
    );
};
