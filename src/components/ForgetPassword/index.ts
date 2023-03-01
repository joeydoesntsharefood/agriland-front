import { createElement } from "react"
import { IViewProps } from "../Login/types"
import View from "./view"

const ForgetPassword = ({changeOption }: IViewProps) => {
  return createElement(View, { changeOption })
}

export default ForgetPassword