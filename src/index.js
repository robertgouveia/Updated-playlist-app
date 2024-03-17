import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from "./app/Root";
import reportWebVitals from './test/reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root />} />
));

ReactDOM.render(
    <Provider store={store}>
        <RouterProvider router={router}>
            <Root />
        </RouterProvider>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
