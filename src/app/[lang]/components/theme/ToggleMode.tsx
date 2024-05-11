"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Icon from "../ui/icon/Icon";

const ToggleMode = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const dark = theme === "dark";

  const toggleTheme = () => {
    setTheme(dark ? "light" : "dark");
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        {dark ? (
          <Icon name="moon" size={22} color="hsl(var(--foreground))" />
        ) : (
          <Icon name="sun" size={25} color="hsl(var(--foreground))" />
        )}
      </button>
    </div>
  );
};

export default ToggleMode;
