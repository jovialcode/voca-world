import Navbar from "./Navbar";
import styled from "styled-components";
import {ReactElement} from "react";
import React from "react";

const LayoutWrapper = styled.div.attrs({
    className: ""
})`
  min-width: 960px;
  height: 100vh;

  background: #edeff5;
`;

const MainContent = styled.main.attrs({
    className: "flex items-center justify-center"
})`
  height: calc(100% - 70px);
`;

const DefaultLayout = ({Component, pageProps}) => {
    const nestedLayout = () => {
        if (Component.getLayout) {
            return Component.getLayout(<Component {...pageProps} />);
        } else {
            return <Component {...pageProps} />;
        }
    }

    return (
        <LayoutWrapper>
            <Navbar/>
            <MainContent>
                {nestedLayout()}
            </MainContent>
        </LayoutWrapper>
    )
}

export default DefaultLayout;