import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../config/firebase-config";

const Survey = (props) => {
  const [submitButton, setSubmitButton] = useState(true);

  const saveAnswer = (event) => {
    event.preventDefault();
    const elementArray = [...event.target.elements];
    const formData = elementArray.reduce((accumulator, currentValue) => {
      if (currentValue.id) {
        accumulator[currentValue.id] = currentValue.value;
      }
      return accumulator;
    }, {});
    db.collection(props.question).add(formData);
  };

  return (
    <StyledContainer>
      <form onSubmit={saveAnswer}>
        <div class="form-group">
          <textarea class="form-control" id="answer" rows="3"></textarea>
          {submitButton ? (
            <button type="submit" onClick={() => setSubmitButton(false)}>
              Submit
            </button>
          ) : (
            <button>Submitted</button>
          )}
        </div>
      </form>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  align-items: center;

  .form-group {
    width: 150%;
    display: flex;
    margin-right: 2rem;
    justify-content: center;
  }
  .form-control {
    width: 150% !important;
    margin-right: 2rem;
  }
  button {
    width: 30%;
    height: 20%;
    justify-content: center;
  }
`;

export default Survey;
