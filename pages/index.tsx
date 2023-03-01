import LoginForm from "@/src/components/LoginForm"
import Image from "next/image"
import { BoardWrapper, BodyWrapper, HeaderTextWrapper, HeaderWrappper, ImageWrapper } from "../src/styles/styles"
import logo from '../assets/vertical_001.png'

const Home = () => {
  return(
    <BoardWrapper>
      <HeaderWrappper>
        <ImageWrapper>
          <Image src={logo} height={undefined} width={263.2} alt='Logo'/>
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