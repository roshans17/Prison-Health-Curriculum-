import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
//Styled
import styled from "styled-components";
const Control = ({ currentContent, setCurrentContent, content }) => {
  const selectContentHandler = (direction) => {
    let currentIndex = content.findIndex(
      (content) => content.id === currentContent.id
    );
    if (direction === "skip-forward") {
      setCurrentContent(content[(currentIndex + 1) % content.length]);
    }
    if (direction === "skip-back") {
      if ((currentIndex - 1) % content.length === -1) {
      } else {
        setCurrentContent(content[(currentIndex - 1) % content.length]);
      }
    }
  };

  return (
    <StyledControl>
      <div className="controller">
        <h4>Module Timeline:</h4>
        <FontAwesomeIcon
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
          onClick={() => selectContentHandler("skip-back")}
        ></FontAwesomeIcon>
        <p>{currentContent.title}</p>
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
          onClick={() => selectContentHandler("skip-forward")}
        ></FontAwesomeIcon>
      </div>
    </StyledControl>
  );
};

const StyledControl = styled.div`
  min-height: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0e2226;
  width: 60%;
  color: white;
  border-radius: 10px;
  p{
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
  }

  .controller {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    svg {
      cursor: pointer;
    }
  }
`;

export default Control;
