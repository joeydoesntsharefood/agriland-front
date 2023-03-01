import { WrapperButton } from "./styles"
import { IViewProps } from "./types"

const View = ({ onClick, text }: IViewProps) => {
  return (
    <WrapperButton>
      <button onClick={onClick} >{text}</button>
    </WrapperButton>
    
  )
}

export default View