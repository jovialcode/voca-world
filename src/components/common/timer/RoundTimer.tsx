import styled from "styled-components";
import Timer from "./Timer";
import {useState} from "react";

type Props = {
    seconds: number;
    size: number;
    strokeBgColor: string;
    strokeColor: string;
    strokeWidth: number;
    finishCallbackFn?: Function;
};

const TimerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  height: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
`
const TimerText = styled.p`
  color: ${props => props.strokeColor || 'black'};
  font-size: ${props => `${props.size * 0.3}px`};
`

const TimerPath = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotateY(-180deg) rotateZ(-90deg);
  overflow: visible;
`

const RoundTimer = (props: Props) => {
    const [dashoffset, setDashoffset] = useState(0);
    const [isHidden, setIsHidden] = useState(false);

    let milliseconds = props.seconds * 1000;
    let radius = props.size / 2;
    let circumference = props.size * Math.PI;

    const strokeDashoffset = (countdown: number) => setDashoffset(circumference - (countdown / milliseconds) * circumference);
    const makeHidden = () => {
        setIsHidden(true);
        if (props.finishCallbackFn) props.finishCallbackFn();
    }

    return (
        <TimerWrapper  {...props}>
            <TimerText {...props}>
                <Timer
                    seconds={props.seconds}
                    countdownCallback={strokeDashoffset}
                    finishCallback={makeHidden}
                    isHidden={false}/>s
            </TimerText>

            <TimerPath>
                <circle
                    cx={radius}
                    cy={radius}
                    r={radius}
                    fill="none"
                    stroke={props.strokeBgColor}
                    strokeWidth={props.strokeWidth}
                />
            </TimerPath>
            {
                !isHidden &&
                <TimerPath>
                    <circle
                        r={radius}
                        cx={radius}
                        cy={radius}
                        strokeDasharray={circumference}
                        strokeDashoffset={dashoffset}
                        fill="none"
                        strokeLinecap="round"
                        stroke={props.strokeColor}
                        strokeWidth={props.strokeWidth}
                    />
                </TimerPath>
            }
        </TimerWrapper>
    )
}

export default RoundTimer;