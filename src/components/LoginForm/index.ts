import { createElement } from "react"
import { IViewProps } from "./types"
import View from "./view"

const LoginForm = () => {
  return createElement(View, { onClick: () => console.log('teste')})
}

export default LoginForm