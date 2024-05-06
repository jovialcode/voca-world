import styled from "styled-components";
import {useRef} from "react";
import BasicButton from "../button/BasicButton";

type Props = {
    msg: string;
    okCallback?: Function,
    cancelCallback?: Function
}

const ConfirmWrapper = styled.div.attrs({
    className: ""
})`
  
  width: 250px;
  height: 130px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  
  border: 1px solid #a5a5a5;
  border-radius: 7px;

  font-family: 'NotoSans-Regular';
`

const Content = styled.p.attrs({
    className: "flex items-center justify-center"
})`
  padding: 15px;

`

const ButtonWrapper = styled.div.attrs({
    className: "flex items-center justify-center"
})`
  width: 100%;
  position: absolute;
  bottom: 10px;
`

const Confirm = (props: Props) => {
    const confirmRef = useRef();

    const okFn = () => {
        if (props.okCallback) props.okCallback();
    }

    const cancelFn = () => {
        if (props.cancelCallback) props.cancelCallback();
        confirmRef.current.remove();
    }

    return (
        <ConfirmWrapper ref={confirmRef}>
            <Content>{props.msg}</Content>
            <ButtonWrapper>
                <BasicButton msg={"확인"} className={`bg-blue-600 mr-4`} clickFn={okFn}/>
                <BasicButton msg={"취소"} className={"bg-gray-300"} clickFn={cancelFn}/>
            </ButtonWrapper>
        </ConfirmWrapper>
    )
}

export default Confirm;