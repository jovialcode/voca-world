import styled from "styled-components";

import React from "react";
import {WordBody, WordHead} from "./WordBeepLayout";
import RoundTimer from "../common/timer/RoundTimer";
import WordBeepPageLayout from "../layouts/WordBeepPageLayout";
import {useRouter} from "next/router";

const BufferWrapper = styled.div.attrs({
    className: "flex justify-center items-center"
})`
  background-color: #ffffff;
  
  height: 100%;
  width: 100%;

  color: #000000;
  font-size: 18px;
`;

type Props = {
    callback?: Function
}


const WordBeepBuffer = (props: Props) => {
    return (
        <>
            <WordHead>
                3초 뒤에 영어 단어 암기를 시작합니다.
            </WordHead>
            <WordBody>
                <BufferWrapper>
                    <RoundTimer seconds={3}
                                size={180}
                                strokeBgColor="#B4B4B4FF"
                                strokeColor="#2d4ea8"
                                strokeWidth={20}
                                finishCallbackFn={props.callback}
                    />
                </BufferWrapper>
            </WordBody>
        </>
    );
}
WordBeepBuffer.getLayout = WordBeepPageLayout;
export default WordBeepBuffer;