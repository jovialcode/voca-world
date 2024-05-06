import styled from "styled-components";

type Props = {
    content: Array<Object>
}

const DevToolsWrapper = styled.div.attrs({})`
  position: absolute;
  top: 50%;
  left: -200px;
  transform: translateY(-50%);
  z-index: 100;
  
  width: 200px;
  height: 140px;
  
  background: #000000;
  color: #ffffff;
  
  border: 1px solid #0070f3;
`

const DevContent = styled.ul.attrs({})`
  
`

const DevTools = (props: Props) => {
    const content = props.content;
    return (
        <DevToolsWrapper>
            <DevContent>
                {
                    content.map((obj) => <li key={obj.name}>{obj.name} : {obj.value}</li>)
                }
            </DevContent>
        </DevToolsWrapper>
    )
}

export default DevTools;