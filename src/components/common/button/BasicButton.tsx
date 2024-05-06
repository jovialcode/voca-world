import styled from "styled-components";

type Props = {
    msg: string,
    className?: string,
    clickFn: Function
}

const Button = styled.button.attrs({
    className: ""
})`
  max-width: 180px;
  
  padding: 10px 15px;
  border-radius: 5px;
  
  color: #fafafa;
  
  font-size: 15px;
  font-family: 'NotoSans-Regular';
`

const BasicButton = (props: Props) => {
    return (
        <Button className={props.className} onClick={props.clickFn}>
            {props.msg}
        </Button>
    )
}

export default BasicButton