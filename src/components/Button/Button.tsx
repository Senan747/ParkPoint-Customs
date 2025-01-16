import styles from "./Button.module.css";
import { ButtonProps } from "../../types";

function Button({ text, onClick, disabled = false }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

export default Button;
