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
