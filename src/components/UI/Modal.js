import React from "react";
import classes from "./Modal.module.css";
export default class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className={classes.modal} id="modal">
        <div className={classes.content}>{this.props.children}</div>
      </div>
    );
  }
}