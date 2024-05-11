import { Switch } from "@headlessui/react";
import Icon from "./icon/Icon";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  disableColor: ColorNames;
  enableColor: ColorNames;
  enabled: boolean;
  size: "small" | "medium" | "big";
  setEnabled: () => void;
  iconEnable?: IconName;
  iconDisable?: IconName;
  iconEnableColor?: ThemeColorsValues;
  iconDisableColor?: ThemeColorsValues;
};

export default function SwitchComponent({
  enabled,
  setEnabled,
  enableColor,
  disableColor,
  iconEnable,
  iconDisable,
  iconDisableColor,
  iconEnableColor,
  size,
}: Props) {
  const switchSizeStyles = {
    small: { width: "44px", height: "28px" },
    medium: { width: "56px", height: "36px" },
    big: { width: "64px", height: "44px" },
  };

  const buttonSizeStyles = {
    small: { width: "20px", height: "20px" },
    medium: { width: "24px", height: "24px" },
    big: { width: "28px", height: "28px" },
  };

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      style={{
        ...switchSizeStyles[size],
        backgroundColor: enabled ? enableColor : disableColor,
      }}
      className="relative inline-flex flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out outline-none ring-2 ring-primary/20 "
    >
      <span
        style={buttonSizeStyles[size]}
        className={classNames(
          enabled ? "translate-x-5" : "translate-x-0",
          `pointer-events-none relative inline-block  transform rounded-full shadow ring-0 transition duration-200 ease-in-out border-[1px]`,
        )}
      >
        <span
          className={classNames(
            enabled
              ? "opacity-0 duration-100 ease-out"
              : "opacity-100 duration-200 ease-in",
            "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity",
          )}
          aria-hidden="true"
        >
          {iconEnable && (
            <Icon size={20} name={iconEnable} color={iconEnableColor} />
          )}
        </span>
        <span
          className={classNames(
            enabled
              ? "opacity-100 duration-200 ease-in"
              : "opacity-0 duration-100 ease-out",
            "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity",
          )}
          aria-hidden="true"
        >
          {iconDisable && (
            <Icon size={20} name={iconDisable} color={iconDisableColor} />
          )}
        </span>
      </span>
    </Switch>
  );
}
