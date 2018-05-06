// eslint-disable-next-line
import React, { Fragment } from 'react';

const TextQuestion = props => {
  const styles = {
    inputBoxContainer: {
      minHeight: '10vh',
      minWidth: '40em',
    },
  };
  return (
    <Fragment>
      {/*  */}
      <h2>{props.question.prompt}</h2>
      <h4>Is this required : {props.question.is_required.toString()}</h4>
      <h4>Min Character Length : {props.question.min_char_length}</h4>
      <textarea
        type="text"
        value={props.answer}
        style={{ ...styles.inputBoxContainer }}
        onChange={e => props.handleTextChange(e)}
      />
    </Fragment>
  );
};

export default TextQuestion;
