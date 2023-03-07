import schedule from "@/src/consumers/Schedule"
import { useEffect } from "react"
import InputText from "../InputText"
import SubmitButton from "../SubmitButton"
import { LoginWrapper } from "./styles"
import { IViewProps } from "./types"

const View = ({ onClick, onChange, values } : IViewProps) => {
  useEffect(() => {
    const test = async () => {
      try {
        const response = await schedule.list()
        console.log(response)
      } catch (err: any) {
        console.log(err)
      }
    }

    test()

  }, [])

  return (
    <LoginWrapper>
      <InputText  label="E-mail" value={values.email} onChange={value => onChange({ email: value })} />
      <InputText  label="Senha" value={values.password} onChange={value => onChange({ password: value })} />
      <SubmitButton onClick={onClick}>
        Entrar
      </SubmitButton>
    </LoginWrapper>
  )
}

export default View