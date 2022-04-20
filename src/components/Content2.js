import React from "react";
//Styled
import styled from "styled-components";

const Content2 = ({ currentContent, content }) => {
  return (
    <StyledContent2Container>
      <div className="content">
        <div className="article">{currentContent.content}</div>
      </div>
    </StyledContent2Container>
  );
};

const StyledContent2Container = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

export default Content2;