import InputText from "@/src/components/InputText"
import LoginForm from "@/src/components/LoginForm"
import SubmitButton from "@/src/components/SubmitButton"
import Image from "next/image"
import { BoardWrapper, BodyWrapper, HeaderTextWrapper, HeaderWrappper, ImageWrapper } from "../src/styles/styles"

const Home = () => {
  return(
    <BoardWrapper>
      <HeaderWrappper>
        <ImageWrapper>
          <img src='http://pubhouse-001-site1.ctempurl.com/img/vertical_001.png' />
        </ImageWrapper>
        <HeaderTextWrapper>
          Login
        </HeaderTextWrapper>
      </HeaderWrappper>
      <BodyWrapper>
        <LoginForm   />
      </BodyWrapper>
    </BoardWrapper>
  )
}

export default Home