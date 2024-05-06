import styled from "styled-components";

type Props = {
    msg: string;
    okCallback?: Function,
    cancelCallback?: Function
}

const ConfirmWrapper = styled.div.attrs({
    className: "flex items-center justify-center h-screen"
})`
  position: absolute;
  
`

const Confirm = (props: Props) => {
    return (
        <ConfirmWrapper>
            {props.msg}
            <button>ok</button>
            <button>cancel</button>
        </ConfirmWrapper>
    )
}

export default Confirm;