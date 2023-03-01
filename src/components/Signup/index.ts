import { createElement } from "react"
import { IViewProps } from "../Login/types"
import View from "./view"

const Signup = ({ changeOption }: IViewProps) => {
  return createElement(View, { changeOption })
}

export default Signup