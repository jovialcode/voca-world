import styled from "styled-components";
import Link from "next/link";
import {FcAlphabeticalSortingAz, FcGraduationCap, FcKindle, FcQuestions} from "react-icons/fc";
import {IconContext} from "react-icons";
import {useRouter} from "next/router";

const NavWrapper = styled.nav.attrs({
    className: "flex items-center justify-center"
})`
  height: 70px;
  background: #ffffff;
  border-bottom: 1px solid #e5e5e5;

  font-family: NotoSans-Regular,sans-serif;
`

const Logo = styled.div.attrs({
    className: "mr-9"
})`
  > img {
    width: 100px;
    height: 100px;
    overflow: hidden;
    object-fit: cover;
  }
`

const Nav = styled.ul.attrs({
    className: "flex justify-items-center justify-self-center"
})`
  width: 1260px;
  height: 100%;
`

const SubNav = styled.ul.attrs({
    className: "flex flex-col justify-center content-center"
})`
  z-index: 2;
  display: none;
  position: absolute;
  left: 0;
  top: 60px;

  width: 150px;
  padding: 10px 10px;
  background: #ffffff;
  border: 1px solid #dae1e6;
  box-shadow: 0 3px 5px 0 rgb(0 0 0 / 10%);
`

const NavLi = styled.li.attrs({
    className: "flex justify-center items-center"
})`
  position: relative;
  width: 120px;
  font-size: 17px;

  &.active{
    border-bottom: 2px solid #2d4ea8;
  }

  &:hover{
    border-top: 2px solid #2d4ea8;
  }
`

const DropdownLi = styled(NavLi).attrs({})`
  cursor: pointer;

  &:hover ${SubNav} {
    display: block;
  }
`

const SubNavLi = styled.li.attrs({
    className: "flex justify-center items-center flex-grow: 1"
})`
  &:not(:last-child){
    margin-bottom: 10px;
  }
  &:hover{
    background:#e7ebed;
  }
`

const Profile = styled.div.attrs({
    className: ""
})`
`

const Icon = styled.span.attrs({})

const Navbar = () => {
    const router = useRouter();
    const path = router.asPath;
    const firstPath = path.split('/')[1];

    return (
        <NavWrapper>
            <Logo>
                <img src="/cat_white.png"/>
            </Logo>
            <Nav>
                <DropdownLi className={firstPath == "word_beep" ? "active" : ""}>
                    <IconContext.Provider value={{className: "mr-2"}}>
                        <FcAlphabeticalSortingAz/>
                    </IconContext.Provider>
                    <button>영어단어</button>
                    <SubNav>
                        <SubNavLi>
                            <IconContext.Provider value={{className: "mr-2"}}>
                                <FcGraduationCap/>
                            </IconContext.Provider>
                            <Link href="/word_beep">단어 외우기</Link>
                        </SubNavLi>
                        <SubNavLi>
                            <IconContext.Provider value={{className: "mr-2"}}>
                                <FcQuestions/>
                            </IconContext.Provider>
                            <Link href="/word_quiz">단어 퀴즈</Link>
                        </SubNavLi>
                    </SubNav>
                </DropdownLi>
                <NavLi className={firstPath == "word_create" ? "active" : ""}>
                    <IconContext.Provider value={{className: "mr-2"}}>
                        <FcKindle/>
                    </IconContext.Provider>
                    <Link href="/word_create">단어만들기</Link>
                </NavLi>
            </Nav>
            <Profile/>
        </NavWrapper>
    )
}

export default Navbar;