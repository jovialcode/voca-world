import Confirm from "../../components/common/message/Confirm";
import {useRouter} from "next/router";
import WordBeepPageLayout from "../../components/layouts/WordBeepPageLayout";
import styled from "styled-components";
import BasicButton from "../../components/common/button/BasicButton";
import {FcGraduationCap, FcInfo} from "react-icons/fc";
import {IconContext} from "react-icons";

const GuideWrapper = styled.div.attrs({
    className: "flex flex-row"
})`
  position:relative;
  width: 100%;
  height: 100%;
`;


const ImageWrapper = styled.div.attrs({
    className: "flex"
})`
  width: 60%;
  height: 100%;
  
  border: 1px solid #b5b5b5;
  
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentWrapper = styled.div.attrs({
    className: "flex flex-col"
})`
  position: relative;
  width: 40%;
  height: 100%;
  
  padding: 30px;
  
  font-family: NotoSans-Regular;
  & > h2 {
    font-size: 20px;
    margin-bottom: 15px;
  }
  & > p{
    font-size: 18px;
  }
`;

const ButtonWrapper = styled.div.attrs({})`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, 0%);
`;

const WordBeepGuide = () => {
    const router = useRouter();
    const nextPage = () => {
        router.push("/word_beep/WordBeepStart")
    }
    return (
        <GuideWrapper>
            <ImageWrapper>
                <img src={"/cat_img.jpg"}/>
            </ImageWrapper>
            <ContentWrapper>
                <h2>
                    <IconContext.Provider value={{className: "inline-block mr-2"}}>
                        <FcInfo/>
                    </IconContext.Provider>
                    How to Do?
                </h2>
                <p>
                    단어 외우기는 이렇게 하는것입니다. 다 같이 잘해봅시다
                </p>
                <ButtonWrapper>
                    <BasicButton msg={"다음 페이지"} clickFn={nextPage} className={"bg-blue-600"}/>
                </ButtonWrapper>
            </ContentWrapper>
        </GuideWrapper>
    )
}

WordBeepGuide.getLayout = WordBeepPageLayout;
export default WordBeepGuide;