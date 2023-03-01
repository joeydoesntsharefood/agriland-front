import { BoardForgetPasswordWrapper, BodyForgetPasswordWrapper, HeaderTextWrapper, HeaderWrappper, ImageWrapper } from "@/src/styles/styles"
import Image from "next/image"
import InputText from "../InputText"
import { IViewProps } from "../Login/types"
import SubmitButton from "../SubmitButton"
import logo from '../../../assets/vertical_001.png'

const View = ({ changeOption }: IViewProps) => {
  return (
    <BoardForgetPasswordWrapper>
      <HeaderWrappper>
        <ImageWrapper>
          <Image src={logo} height={undefined} width={263.2} alt='Logo'/>
        </ImageWrapper>
        <HeaderTextWrapper>
          Esqueci minha senha
        </HeaderTextWrapper>
      </HeaderWrappper>
      <BodyForgetPasswordWrapper>
        <p>Enviaremos um e-mail com os dados necessários para atualizar sua senha.</p>
        <InputText label="E-mail" onChange={console.log} />
        <SubmitButton onClick={() => console.log('teste')}>
          Enviar
        </SubmitButton>
        <SubmitButton onClick={() => changeOption('signin')}>
          Voltar
        </SubmitButton>
      </BodyForgetPasswordWrapper>
    </BoardForgetPasswordWrapper>
  )
}

export default View