import { Routes, Route } from "react-router-dom";
import { Base } from "../views/Base";
import { Task1 } from "../views/Task1";
import { Task2 } from "../views/Task2";
import { Task3 } from "../views/Task3";
import { Task5 } from "../views/Task5";
import { Task6 } from "../views/Task6";
import { Task7 } from "../views/Task7";
import { Home } from "../views/Home";
import { Task8 } from "../views/Task8";
import { Task9 } from "../views/Task9";
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Base />}>
                <Route index element={<Home />} />
                <Route path="/task-1" element={<Task1 />} />
                <Route path="/task-2" element={<Task2 />} />
                <Route path="/task-3" element={<Task3 />} />
                <Route path="/task-5" element={<Task5 />} />
                <Route path="/task-6" element={<Task6 />} />
                <Route path="/task-7/:id" element={<Task7 />} />
                <Route path="/task-8" element={<Task8 />} />
                <Route path="/task-9" element={<Task9 />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;