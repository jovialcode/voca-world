import React from "react";
import styled from "styled-components";

const Wrapper = styled.div.attrs({
    className: "flex flex-col"
})`
  position: relative;
  
  height: 600px;
  width: 800px;

  background: #ffffff;
  border: 1px solid #efe8e8;
  border-radius: 15px;
`;


const WordBeepPageLayout = (page) => {
    return (
        <Wrapper>
            {page}
        </Wrapper>
    )
}

export default WordBeepPageLayout;