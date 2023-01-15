import React from "react";
import { Routes, Route } from "react-router-dom";

import TaskForm from "./components/TaskForm";
import "./App.css";
import FavList from "./components/fav/FavList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<TaskForm />}></Route>

        <Route path="/favorite" element={<FavList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
