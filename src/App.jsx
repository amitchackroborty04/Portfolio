import React from "react";

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rotlayout from "./Rootlayout/Rotlayout";
import Home from "./Components/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Rotlayout/>}>
    <Route index element={<Home/>}/>
  </Route>)
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
