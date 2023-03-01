import { createElement } from "react"
import { IViewProps } from "./types"
import View from "./view"

const InputText = ({ label, onChange, value }: IViewProps) => {
  return createElement(View, { label, onChange, value })
}

export default InputText