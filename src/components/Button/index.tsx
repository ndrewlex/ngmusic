import { FC, MouseEventHandler } from "react";
import cx from "classnames";
import styles from "./styles.module.scss";

type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children: React.ReactNode;
  isFullWidth?: boolean;
  variant: "purple" | "white" | "grey";
  size: "md" | "sm";
};

const Button: FC<ButtonProps> = ({
  onClick,
  children,
  className,
  isFullWidth,
  variant,
  size,
}) => {
  return (
    <button
      className={cx(
        styles.btn,
        styles[`btn_${variant}`],
        styles[`btn_${size}`],
        { fullwidth: isFullWidth },
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
