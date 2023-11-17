import classNames from "classnames";
import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import cls from "./Button.module.scss";

export type ButtonTheme = "clear" | "outline" | "filled";
export type ButtonColor = "primary" | "error" | "success";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  theme?: ButtonTheme;
  disabled?: boolean;
  color?: ButtonColor;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    theme = "filled",
    color = "primary",
    disabled,
    children,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={classNames(cls.Button, { [cls.disabled]: disabled }, [
        className,
        cls[theme],
        cls[color],
      ])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
