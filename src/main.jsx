import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import ContextProvider from "@/context/index.jsx";
import {initialState, reducer} from "@/context/reducer.js";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ContextProvider initialState={initialState} reducer={reducer}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ContextProvider>
    </StrictMode>
);
