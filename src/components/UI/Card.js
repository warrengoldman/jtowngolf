import classes from './Card.module.css';
const Card = props => {
  const hidden = props.visible !== undefined && !props.visible;
  return <div hidden={hidden} className={classes.card}>{props.children}</div>
}
export default Card;