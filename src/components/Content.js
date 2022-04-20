import React from "react";
//Styled
import styled from "styled-components";

const Content = ({ currentContent, content }) => {
  return (
    <StyledContentContainer>
      <div className="content">
        <div className="article">{currentContent.content}</div>
      </div>
    </StyledContentContainer>
  );
};

const StyledContentContainer = styled.div`
  min-height: 60vh;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h4 {
    padding: 1rem;
  }

  .article {
    display: flex;
    justify-content: center;
    align-items: top;
    img {
      min-height: 10vh;
      width: 50%;
    }
  }
`;

export default Content;
