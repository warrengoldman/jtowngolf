import classes from './Radio.module.css';
const Radio = (props) => {
  const id = props.id;
  const value = props.value;
  const text = props.text;
  const name = props.name;
  const radioHandler = props.onChange;
  return (
    <div className={`${props.checked ? classes.radioselected : classes.radio}`} onClick={radioHandler}>
      <label>{text}</label>
      <input
        id={id}
        value={value}
        name={name}
        type="radio"
        checked={props.checked}
        onChange={radioHandler}
        onClick={radioHandler}
      />
    </div>
  );
};
export default Radio;
