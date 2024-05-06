import ProgressTimer from "../../components/common/timer/ProgressTimer";
import React from "react";
import WordBeepPageLayout from "../../components/layouts/WordBeepPageLayout";
import {WordHead, WordBody} from "./WordBeepLayout";
import styled from "styled-components";
import Image from "next/image";

type Props = {
    no: number,
    meaning: string,
    spelling: string,
    pronounce: string,
    title?: string,
    image?: string,
    callback?: Function
}

const WordBeepWrapper = styled.div.attrs({
    className: "flex flex-col items-center"
})`
  padding: 30px;
  width: 100%;
  height: 100%;
`
const ImageWrapper = styled.div.attrs({
    className: "flex justify-center"
})`
  width: 400px;
  height: 300px;
`

const WordWrapper = styled.div.attrs({
    className: "mt-10 text-center"
})
    `
    `

const Word = styled.p.attrs({
    className: ""
})`
  display: block;
  font-size: 25px;
  line-height: 34px;
  font-family: NotoSans-Regular;
`

const Pronounce = styled.span.attrs({
    className: ""
})`
  line-height: 34px;

  font-family: NotoSans-Regular;
  font-size: 20px;

  color: #5e5e5e;
`

const WordBeep = (props: Props) => {
    const defaultTitle = "깜빡이는 이미지와 함께 영어 단어를 외워봅시다.";
    const defaultImage = "/cats.jpg";

    return (
        <>
            <WordHead>
                <span className="flex-none mr-2">{props.no}.</span>
                <span className="flex-grow">{props.title ? props.title : defaultTitle}</span>
            </WordHead>
            <ProgressTimer
                key={props.no.toString()}
                seconds={5}
                width={800}
                strokeBgColor="#E9E9E9FF"
                strokeColor="#8299F6FF"
                callback={props.callback}
            />
            <WordBody>
                <WordBeepWrapper>
                    <ImageWrapper>
                        <Image src={props.image ? props.image : defaultImage} width={400} height={300}/>
                    </ImageWrapper>
                    <WordWrapper>
                        <Word>{props.spelling} <Pronounce>[{props.pronounce}]</Pronounce></Word>
                        <Word>{props.meaning}</Word>
                    </WordWrapper>
                </WordBeepWrapper>
            </WordBody>
        </>
    );
}

WordBeep.getLayout = WordBeepPageLayout;
export default WordBeep;