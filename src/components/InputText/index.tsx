import { ChangeEventHandler } from "react";
import cx from "classnames";
import styles from "./styles.module.scss";

type InputTextProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  className?: string;
  placeholder?: string;
};

const InputText = ({
  onChange,
  className,
  placeholder,
  value,
}: InputTextProps) => {
  return (
    <input
      type="text"
      onChange={onChange}
      className={cx(styles.input_text, className)}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default InputText;
