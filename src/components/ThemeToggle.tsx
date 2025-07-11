import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative inline-flex h-8 w-14 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
    >
      {/* Toggle Track */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 dark:from-purple-600 dark:to-indigo-700 transition-all duration-300" />

      {/* Toggle Thumb */}
      <div
        className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 transform ${
          isDark ? "translate-x-3" : "-translate-x-3"
        }`}
      >
        <Sun
          className={`h-3.5 w-3.5 text-yellow-500 absolute transition-all duration-300 ${
            isDark
              ? "opacity-0 rotate-90 scale-0"
              : "opacity-100 rotate-0 scale-100"
          }`}
        />
        <Moon
          className={`h-3 w-3 text-slate-700 absolute transition-all duration-300 ${
            isDark
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-90 scale-0"
          }`}
        />
      </div>

      {/* Background Icons */}
      <Sun
        className={`absolute left-1.5 h-3 w-3 text-white/70 transition-opacity duration-300 ${
          isDark ? "opacity-100" : "opacity-0"
        }`}
      />
      <Moon
        className={`absolute right-1.5 h-3 w-3 text-white/70 transition-opacity duration-300 ${
          isDark ? "opacity-0" : "opacity-100"
        }`}
      />
    </button>
  );
}
