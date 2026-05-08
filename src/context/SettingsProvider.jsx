import { useEffect, createContext, useReducer } from "react";
import { settingsReducer, initialState } from "./settingsReducer";


const SettingsContext = createContext();

export function SettingsProvider({ children }) {
    const [state, dispatch] = useReducer(settingsReducer, initialState);



    useEffect(() => {
        if (state.theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        localStorage.setItem("theme", state.theme);
    }, [state.theme]);
    return (
        <SettingsContext.Provider value={{ state, dispatch }}>
            {children}
        </SettingsContext.Provider>
    );
}

export { SettingsContext };