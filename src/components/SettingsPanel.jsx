import { useSettings } from "../context/useSettings";

export default function SettingsPanel() {
  const { state, dispatch } = useSettings();

  const isDark = state.theme === "dark";

  return (
    <div className="fixed bottom-5 right-5 z-50">

      <button
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        className="
          flex items-center gap-3
          px-5 py-2 rounded-full
          bg-white dark:bg-gray-800
          shadow-xl
          text-gray-800 dark:text-white
          transition-all duration-300
          hover:scale-105 active:scale-95
        "
      >


        <div className="relative w-10 h-5 rounded-full bg-gray-300 dark:bg-gray-600 transition-colors">

          <div
            className={`
              absolute top-1/2 -translate-y-1/2
              w-4 h-4 rounded-full
              transition-all duration-300 ease-in-out
              shadow-md
              ${isDark
                ? "translate-x-5 bg-yellow-300"
                : "translate-x-1 bg-blue-500"}
            `}
          />
        </div>


        <span className="text-sm font-medium">
          {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </span>

      </button>


    </div>
  );
}