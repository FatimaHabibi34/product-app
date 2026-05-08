export const initialState = {
  theme: localStorage.getItem("theme") || "light",
  view: "grid",
};

export function settingsReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME": {
      const newTheme = state.theme === "light" ? "dark" : "light";

      return { ...state, theme: newTheme };
    }

    case "TOGGLE_VIEW":
      return {
        ...state,
        view: state.view === "grid" ? "list" : "grid",
      };

    default:
      return state;
  }
}