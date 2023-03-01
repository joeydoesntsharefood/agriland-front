import { IViewProps } from "../Login/types"
import SubmitButton from "../SubmitButton"

const View = ({ changeOption }: IViewProps) => {
  return (
    <>
      <SubmitButton onClick={() => console.log('teste')}>
        Enviar
      </SubmitButton>
      <SubmitButton onClick={() => changeOption('signin')}>
        Voltar
      </SubmitButton>
    </>
  )
}

export default View