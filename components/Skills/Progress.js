import React from "react";
import * as progress from "./Progress.styled";

const Progress = (props) => {
  return (
    <progress.Container>
      <progress.Bar percent={props.percent}>
        <span>{props.skill}</span>
        <span>{props.percent}%</span>
      </progress.Bar>
    </progress.Container>
  );
};

export default Progress;
