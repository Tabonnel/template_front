type Props = {
  buttonStyle?: "outline" | "fill";
  size?: "small" | "medium" | "big";
  color?: ThemeColorsValues;
  buttonText: string;
};
export default function Button({
  buttonStyle = "fill",
  size = "medium",
  color = "hsl(var(--primary))",
  buttonText,
}: Props) {
  const buttonStyles = () => {
    if (buttonStyle === "outline") {
      return {
        color: color,
        backgroundColor: "transparent",
        borderColor: color,
        borderWidth: "2px",
      };
    } else {
      return {
        backgroundColor: color,
        color: "var(--color-foreground)",
      };
    }
  };

  const buttonSize = () => {
    switch (size) {
      case "small":
        return "px-2 py-1 text-xs";
      case "medium":
        return "px-3 py-2 text-sm";
      case "big":
        return "px-4 py-3 text-md";
      default:
        return "";
    }
  }
 return (
    <button
      type="button"
      style={buttonStyles()}
      className={`${buttonSize()} rounded-md font-semibold shadow-sm transform hover:scale-105 transition-transform duration-200`}
    >
      {buttonText}
    </button>
  );
}
