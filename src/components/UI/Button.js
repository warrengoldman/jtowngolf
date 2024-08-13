import styles from "./Button.module.css";
const Button = (props) => {
  let buttonClass = styles.button;
  if (props.className === "buttonSmall") {
    buttonClass = styles.buttonSmall;
  }
  return (
    <button type={props.type} className={buttonClass} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
