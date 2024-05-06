import styled from "styled-components";
import RoundTimer from "../../components/common/timer/RoundTimer";

export enum WordQuizType {
    CHOICE
}

type Props = {
    questionId?: number;
    questionType?: WordQuizType;
    questionNumber?: number;
    question?: string;
    seconds?: number;
    answers?: [];
}

const WordHead = styled.div.attrs({
    className: "flex items-center"
})`
  height: 80px;
  padding: 10px 20px;

  background-color: #2d4ea8;
  border-radius: 15px 15px 0 0;

  color: #ffffff;
  font-size: 18px;
`;

const WordBody = styled.div.attrs({
    className: "grid grid-cols-3 items-center"
})`
  padding: 30px;
  width: 100%;
  height: 100%;
`

const TimerWrapper = styled.div.attrs({
    className: "flex justify-center items-center"
})`

`

const WordQuizWrapper = styled.div.attrs({
    className: "col-span-2 flex flex-col m-5"
})`

`

const WordQuizQuestion = styled.p.attrs({
    className: "font-semibold tracking-wide mb-5"
})`
  font-size: 20px;
`

const WordQuizAnswerWrapper = styled.ul.attrs({})`

`

const WordQuizAnswer = styled.li.attrs({})`
  padding: 10px 15px;
  
  &>span {
    font-size: 18px;
    display:inline-block;
    margin:0;
    
    &:after {
      display:block;
      content: '';
      border-bottom: solid 3px #8299f6;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
      transform-origin:  0% 50%;
    }
    
    &:hover{
      cursor: pointer;
      
      &:after{
        transform: scaleX(1);  
      }
    }
  }
`

const WordQuiz = (props: Props) => {
    let answers = [
        'leon',
        'star',
        'lean',
        'roan'
    ];

    return (
        <>
            <WordHead>
                <span className="flex-none mr-2">12.</span>
                <span className="flex-grow">올바른 정답을 선택해주세요.</span>
            </WordHead>
            <WordBody>
                <TimerWrapper>
                    <RoundTimer
                        seconds={5}
                        size={150}
                        strokeBgColor="#B4B4B4FF"
                        strokeColor="#2d4ea8"
                        strokeWidth={10}
                    />
                </TimerWrapper>
                <WordQuizWrapper>
                    <WordQuizQuestion>
                        Q. what is the my cat's name?
                    </WordQuizQuestion>
                    <WordQuizAnswerWrapper>
                        {
                            answers.map((answer, index) =>
                                <WordQuizAnswer key={index}>
                                    <span>{index + 1}. {answer}</span>
                                </WordQuizAnswer>
                            )
                        }
                    </WordQuizAnswerWrapper>
                </WordQuizWrapper>
            </WordBody>
        </>
    )
}

export default WordQuiz;