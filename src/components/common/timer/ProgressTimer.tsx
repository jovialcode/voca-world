import {useCallback, useState} from "react";
import styled from "styled-components";
import Timer from "./Timer";

type Props = {
    key?: string;
    seconds: number;
    width: number;
    strokeBgColor: string;
    strokeColor: string;
    callback?: Function;
};

const TimerWrapper = styled.div`
  position: relative;

  height: 7px;
  width: ${props => `${props.width - 2}px`};
  background-color: ${props => props.strokeBgColor};
`

const TimerPath = styled.div`
  height: 7px;
  background-color: ${props => props.strokeColor};
`

const ProgressTimer = (props: Props) => {
    const {seconds} = props;
    const milliSeconds = seconds * 1000;


    const [percentage, setPercentage] = useState(0);

    const calculatePercentage = (countdown: number) => setPercentage((milliSeconds - countdown) / milliSeconds * 100);
    const makeMaxPercentage = () => setPercentage(100);

    return (
        <TimerWrapper {...props}>
            <TimerPath
                {...props}
                style={{width: `${percentage}%`}}
            />
            <Timer
                seconds={seconds}
                isHidden={true}
                countdownCallback={calculatePercentage}
                finishCallback={
                    () => {
                        makeMaxPercentage();
                        if (props.callback) props.callback();
                    }
                }
            />
        </TimerWrapper>
    )

}

export default ProgressTimer;