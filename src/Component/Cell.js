import React from "react";
import classes from "./Cell.module.css";

const Cell = (props) => {
  let CLS = ["col-2", classes.Cell, classes.Blue];
  if (props.selected.length === 1 && props.selected[0] === +props.id) CLS[2] = classes.Red;
  if (props.selected.length === 2 && (props.selected[0] === +props.id || props.selected[1] === +props.id)) CLS[2] = classes.Red;
  return <div className={CLS.join(" ")} onClick={() => props.clicked(props.id)}></div>;
};

export default Cell;
