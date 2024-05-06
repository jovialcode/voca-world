import {NextPage} from "next"
import styled from "styled-components";

const Wrapper = styled.div.attrs({
    className: "flex flex-col"
})`
  height: 500px;
  width: 900px;

  background: #ffffff;
  border: 1px solid #efe8e8;
  border-radius: 15px;
  box-shadow: 5px 5px 30px #efe8e8;
`;


const WordQuizPage: NextPage = () => {
    return (
        <Wrapper>
            단어 만들기
        </Wrapper>
    )
}

export default WordQuizPage;
