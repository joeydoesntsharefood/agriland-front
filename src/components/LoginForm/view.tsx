import InputText from "../InputText"
import SubmitButton from "../SubmitButton"
import { LoginWrapper } from "./styles"
import { IViewProps } from "./types"

const View = ({ onClick } : IViewProps) => {
  return (
    <LoginWrapper>
      <InputText  label="E-mail" onChange={console.log} />
      <InputText  label="Senha" onChange={console.log} />
      <SubmitButton onClick={onClick}>
        Entrar
      </SubmitButton>
    </LoginWrapper>
  )
}

export default View