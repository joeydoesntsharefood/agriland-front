import { createElement } from "react"
import { IIndexProps, IViewProps } from "./types"
import View from "./view"

const SubmitButton = ({ onClick, children }: IIndexProps) => {
  const text = children
  return createElement(View, { onClick, text })
}

export default SubmitButton