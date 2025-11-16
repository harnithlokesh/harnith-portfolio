import { useState, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded-lg border border-white/10 hover:border-white/30 transition"
      aria-label="toggle theme"
    >
      {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
}
