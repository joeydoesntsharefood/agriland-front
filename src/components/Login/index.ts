import { createElement } from "react"
import { IViewProps } from "./types"
import View from "./view"

const Login = ({ changeOption }: IViewProps) => {
  return createElement(View, { changeOption })
}

export default Login