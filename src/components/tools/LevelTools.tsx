import {useState} from "react";
import styled from "styled-components";

const LevelToolsWrapper = styled.div.attrs({})`
  position: absolute;
  top: 50%;
  left: -110px;
  transform: translateY(-50%);
  z-index: 100;
  
  width: 110px;
  height: 140px;
  
  border: 1px solid #0070f3;
`

const LevelButtonWrapper = styled.div.attrs({})`
  
`

const LevelButton = styled.button.attrs({})`

`

const LevelTools = () => {
    const [level, setLevel] = useState(0);
    const [speed, setSpeed] = useState(1000);

    return (
        <LevelToolsWrapper>
            <div>
                <span>
                    난이도 설정
                </span>
                <LevelButtonWrapper>
                    <LevelButton>1</LevelButton>
                    <LevelButton>2</LevelButton>
                    <LevelButton>3</LevelButton>
                    <LevelButton>4</LevelButton>
                    <LevelButton>5</LevelButton>
                </LevelButtonWrapper>
            </div>
            <div>
                <span>
                    속도 설정
                </span>
                <LevelButtonWrapper>
                    <LevelButton>3</LevelButton>
                    <LevelButton>5</LevelButton>
                    <LevelButton>7</LevelButton>
                </LevelButtonWrapper>
            </div>
        </LevelToolsWrapper>
    )

}

export default LevelTools;