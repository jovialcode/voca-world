import {NextPage} from "next"
import styled from "styled-components";
import WordQuiz from "./WordQuiz";

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
            <WordQuiz/>
        </Wrapper>
    )
}

export default WordQuizPage;
