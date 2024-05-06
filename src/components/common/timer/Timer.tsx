import {useEffect, useRef, useState} from "react";
import UseInterval from "../../../helper/useInterval";

type Props = {
    seconds: number,
    isHidden: boolean,
    isPlay?: boolean,
    countdownCallback?: Function,
    finishCallback?: Function
}

const Timer = (props: Props) => {
    const {countdownCallback, finishCallback} = props;
    const milliSeconds = props.seconds * 1000;
    const isHidden = props.isHidden;
    const isPlay = props.isPlay || true;

    const [countedMilliSeconds, setCountedMilliSeconds] = useState(milliSeconds);

    const countdownRef = UseInterval(() => {
        if (countedMilliSeconds === 0) {
            clearInterval(countdownRef.current);
            if (finishCallback) finishCallback();
        } else {
            setCountedMilliSeconds(countedMilliSeconds - 10);
            if (countdownCallback) countdownCallback(countedMilliSeconds);
        }
    }, 10)

    return (
        <>
            {!isHidden && (countedMilliSeconds / 1000).toFixed()}
        </>
    )
}

export default Timer;