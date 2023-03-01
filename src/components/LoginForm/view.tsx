import InputText from "../InputText"
import SubmitButton from "../SubmitButton"
import { LoginWrapper } from "./styles"

const View = () => {
  return (
    <LoginWrapper>
      <InputText  label="E-mail" onChange={console.log} />
      <InputText  label="Senha" onChange={console.log} />
      <SubmitButton onClick={() => console.log('teste')}>
        Entrar
      </SubmitButton>
    </LoginWrapper>
  )
}

export default View