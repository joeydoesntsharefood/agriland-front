import { BoardWrapper } from "@/src/styles/styles"
import { IViewProps } from "../Login/types"
import SubmitButton from "../SubmitButton"

const View = ({ changeOption }: IViewProps) => {
  return (
    <BoardWrapper>
      <SubmitButton  onClick={() => console.log('teste')}>
        Enviar
      </SubmitButton>
      <SubmitButton onClick={() => changeOption('signin')}>
        Voltar
      </SubmitButton>
    </BoardWrapper>
  )
}

export default View