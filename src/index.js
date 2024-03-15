import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from "./app/Root";
import reportWebVitals from './test/reportWebVitals';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root />} />
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
