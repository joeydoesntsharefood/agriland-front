import { BoardWrapper, BodyWrapper, HeaderTextWrapper, HeaderWrappper, ImageWrapper, OtherOptionsWrapper } from "@/src/styles/styles"
import Image from "next/image"
import logo from '../../../assets/vertical_001.png'
import LoginForm from "../LoginForm"
import SubmitButton from "../SubmitButton"
import { IViewProps } from "./types"

const View = ({ changeOption } : IViewProps) => {
  return (
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
        <LoginForm />
      </BodyWrapper>
      <OtherOptionsWrapper>
        <SubmitButton onClick={() => changeOption('signup')}>
          Cadatrar-se
        </SubmitButton>
        <SubmitButton onClick={() => changeOption('forgetPassword')}>
          Esqueci a senha
        </SubmitButton>
      </OtherOptionsWrapper>
    </BoardWrapper>
  )
}

export default View