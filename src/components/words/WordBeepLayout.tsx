import styled from "styled-components";

export const WordHead = styled.div.attrs({
    className: "flex items-center"
})`
  height: 60px;
  padding: 10px 20px;

  background-color: #2d4ea8;
  border-radius: 15px 15px 0 0;

  color: #ffffff;
  font-size: 18px;
`;

export const WordBody = styled.div.attrs({
    className: ""
})`
  position: relative;
  height: 100%;
  padding: 20px;
`